import { useState, useEffect } from 'react'
import { Heart, Plus, Trash2, Share2 } from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import { useNotificationStore } from '../store/notificationStore'

interface Testimony {
  id: string
  author: string
  content: string
  title: string
  likes: number
  createdAt: Date
}

const Testimonies = () => {
  const { user } = useAuthStore()
  const { addNotification } = useNotificationStore()
  const [testimonies, setTestimonies] = useState<Testimony[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  })

  useEffect(() => {
    const saved = localStorage.getItem('testimonies')
    if (saved) {
      setTestimonies(JSON.parse(saved))
    } else {
      const defaults = [
        {
          id: '1',
          author: 'Sister Grace',
          title: 'God healed my sickness',
          content: 'I was diagnosed with a terrible illness, but through the power of prayer and faith, God completely healed me. All glory to God!',
          likes: 45,
          createdAt: new Date(),
        },
      ]
      setTestimonies(defaults)
      localStorage.setItem('testimonies', JSON.stringify(defaults))
    }
  }, [])

  const handleAddTestimony = (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) {
      addNotification({
        title: 'Login Required',
        message: 'Please log in to share your testimony',
        type: 'info',
      })
      return
    }

    const newTestimony: Testimony = {
      id: Date.now().toString(),
      author: user.displayName,
      ...formData,
      likes: 0,
      createdAt: new Date(),
    }

    const updated = [newTestimony, ...testimonies]
    setTestimonies(updated)
    localStorage.setItem('testimonies', JSON.stringify(updated))
    setFormData({ title: '', content: '' })
    setShowForm(false)
    addNotification({
      title: 'Success',
      message: 'Your testimony has been shared!',
      type: 'success',
    })
  }

  const handleLike = (id: string) => {
    const updated = testimonies.map(t =>
      t.id === id ? { ...t, likes: t.likes + 1 } : t
    )
    setTestimonies(updated)
    localStorage.setItem('testimonies', JSON.stringify(updated))
  }

  const handleDelete = (id: string) => {
    const updated = testimonies.filter(t => t.id !== id)
    setTestimonies(updated)
    localStorage.setItem('testimonies', JSON.stringify(updated))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Testimonies</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Share your story of faith and inspiration
            </p>
          </div>
          {user && (
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              <Plus size={20} className="mr-2" /> Share Testimony
            </button>
          )}
        </div>

        {/* Add Testimony Form */}
        {showForm && user && (
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-8 border border-slate-200 dark:border-slate-700">
            <form onSubmit={handleAddTestimony} className="space-y-4">
              <input
                type="text"
                placeholder="Testimony Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
              />
              <textarea
                placeholder="Share your testimony..."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Share
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

        {/* Testimonies List */}
        <div className="space-y-6">
          {testimonies.map((testimony) => (
            <div
              key={testimony.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {testimony.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      By {testimony.author}
                    </p>
                  </div>
                  {user?.id === testimony.id && (
                    <button
                      onClick={() => handleDelete(testimony.id)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  )}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  {testimony.content}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <button
                    onClick={() => handleLike(testimony.id)}
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                  >
                    <Heart size={20} /> {testimony.likes}
                  </button>
                  <button className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
                    <Share2 size={20} /> Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonies
