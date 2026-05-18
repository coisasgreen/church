import { useState } from 'react'
import { Calendar, MapPin, Users, ArrowRight, Filter } from 'lucide-react'

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  category: string
  attendees: number
  image?: string
}

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const events: Event[] = [
    {
      id: '1',
      title: 'Youth Conference 2026',
      description: 'Annual youth gathering with inspiring speakers and workshops',
      date: '2026-06-15',
      time: '9:00 AM',
      location: 'Main Auditorium',
      category: 'conference',
      attendees: 250,
      image: '🎤',
    },
    {
      id: '2',
      title: 'Prayer Night',
      description: 'All-night prayer vigil and intercession session',
      date: '2026-05-30',
      time: '10:00 PM',
      location: 'Prayer Chamber',
      category: 'prayer',
      attendees: 100,
      image: '🙏',
    },
    {
      id: '3',
      title: 'Healing Service',
      description: 'Special anointed service for healing and deliverance',
      date: '2026-06-05',
      time: '7:00 PM',
      location: 'Main Sanctuary',
      category: 'service',
      attendees: 350,
      image: '✨',
    },
    {
      id: '4',
      title: 'Women Fellowship Meeting',
      description: 'Monthly gathering for women of faith',
      date: '2026-06-10',
      time: '3:00 PM',
      location: 'Fellowship Hall',
      category: 'fellowship',
      attendees: 80,
      image: '👩‍👩‍👧',
    },
  ]

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'conference', label: 'Conferences' },
    { value: 'prayer', label: 'Prayer Meetings' },
    { value: 'service', label: 'Services' },
    { value: 'fellowship', label: 'Fellowship' },
  ]

  const filtered = events.filter(event =>
    selectedCategory === 'all' || event.category === selectedCategory
  )

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Events & Programs</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Upcoming events and programs at our church
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === cat.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-primary-600 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(event => (
            <div
              key={event.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-900 dark:to-black p-8 text-center text-6xl">
                {event.image}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {event.description}
                </p>

                <div className="space-y-2 mb-6 py-4 border-t border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Calendar size={18} />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Calendar size={18} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <MapPin size={18} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Users size={18} />
                    <span>{event.attendees} expected attendees</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center gap-2">
                  Register <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events
