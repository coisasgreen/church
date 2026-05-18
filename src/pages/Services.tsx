import { useState, useEffect } from 'react'
import { Calendar, Clock, MapPin, Users, Plus, Edit2, Trash2 } from 'lucide-react'
import { useAuthStore } from '../store/authStore'

interface Service {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  speaker?: string
  maxAttendees?: number
  currentAttendees: number
  createdAt: Date
}

const Services = () => {
  const { user } = useAuthStore()
  const [services, setServices] = useState<Service[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    speaker: '',
  })

  useEffect(() => {
    // Load services from localStorage
    const saved = localStorage.getItem('services')
    if (saved) {
      setServices(JSON.parse(saved))
    } else {
      // Default services
      const defaultServices: Service[] = [
        {
          id: '1',
          title: 'Sunday Service',
          description: 'Main service of the week with worship and messages',
          date: '2026-05-25',
          time: '10:00 AM',
          location: 'Main Sanctuary',
          speaker: 'Pastor John',
          maxAttendees: 500,
          currentAttendees: 350,
          createdAt: new Date(),
        },
        {
          id: '2',
          title: 'Midweek Service',
          description: 'Prayer and Bible study session',
          date: '2026-05-21',
          time: '7:00 PM',
          location: 'Fellowship Hall',
          speaker: 'Pastor Mary',
          maxAttendees: 150,
          currentAttendees: 120,
          createdAt: new Date(),
        },
      ]
      setServices(defaultServices)
      localStorage.setItem('services', JSON.stringify(defaultServices))
    }
  }, [])

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault()
    if (!user?.role || user.role !== 'admin') return

    const newService: Service = {
      id: Date.now().toString(),
      ...formData,
      currentAttendees: 0,
      createdAt: new Date(),
    }

    const updated = [...services, newService]
    setServices(updated)
    localStorage.setItem('services', JSON.stringify(updated))
    setFormData({ title: '', description: '', date: '', time: '', location: '', speaker: '' })
    setShowForm(false)
  }

  const handleDeleteService = (id: string) => {
    const updated = services.filter(s => s.id !== id)
    setServices(updated)
    localStorage.setItem('services', JSON.stringify(updated))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Service Schedule</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Stay updated with our upcoming services and events
            </p>
          </div>
          {user?.role === 'admin' && (
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              <Plus size={20} className="mr-2" /> Add Service
            </button>
          )}
        </div>

        {/* Add Service Form */}
        {showForm && user?.role === 'admin' && (
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Add New Service</h2>
            <form onSubmit={handleAddService} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Service Title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                />
                <input
                  type="text"
                  placeholder="Speaker Name"
                  value={formData.speaker}
                  onChange={(e) => setFormData({ ...formData, speaker: e.target.value })}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                />
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                  className="px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                  className="px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white md:col-span-2"
                />
              </div>
              <textarea
                placeholder="Service Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                rows={3}
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Add Service
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-400 dark:hover:bg-slate-500 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-900 dark:to-black text-white p-6">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                {service.speaker && <p className="text-primary-100 text-sm mt-1">By {service.speaker}</p>}
              </div>
              <div className="p-6 space-y-4">
                <p className="text-slate-600 dark:text-slate-400">{service.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Calendar size={18} />
                    <span>{new Date(service.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Clock size={18} />
                    <span>{service.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <MapPin size={18} />
                    <span>{service.location}</span>
                  </div>
                  {service.maxAttendees && (
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Users size={18} />
                      <span>
                        {service.currentAttendees}/{service.maxAttendees} attendees
                      </span>
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-200 dark:border-slate-700 pt-4 flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Register
                  </button>
                  {user?.role === 'admin' && (
                    <>
                      <button className="px-4 py-2 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors">
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteService(service.id)}
                        className="px-4 py-2 border border-red-600 text-red-600 dark:text-red-400 rounded-lg font-semibold hover:bg-red-50 dark:hover:bg-red-900 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
