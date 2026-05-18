import { useState } from 'react'
import { Search, BookOpen } from 'lucide-react'

interface Book {
  id: string
  title: string
  author: string
  description: string
  category: string
  icon: string
}

const PrayerBooks = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const books: Book[] = [
    {
      id: '1',
      title: 'The Power of Prayer',
      author: 'Pastor David',
      description: 'Learn effective prayer techniques and spiritual warfare',
      category: 'prayer',
      icon: '🙏',
    },
    {
      id: '2',
      title: 'Daily Devotions',
      author: 'Church Staff',
      description: 'Daily spiritual guidance and meditations',
      category: 'devotion',
      icon: '📖',
    },
    {
      id: '3',
      title: 'Intercessory Prayers',
      author: 'Sister Grace',
      description: 'Powerful prayers for intercession and breakthrough',
      category: 'prayer',
      icon: '✨',
    },
    {
      id: '4',
      title: 'Healing Declarations',
      author: 'Pastor Mary',
      description: 'Declarations for health and wholeness',
      category: 'healing',
      icon: '💚',
    },
    {
      id: '5',
      title: 'Prosperity Prayers',
      author: 'Pastor John',
      description: 'Prayers for financial and spiritual prosperity',
      category: 'prosperity',
      icon: '💰',
    },
    {
      id: '6',
      title: 'Night Prayers',
      author: 'Church Leadership',
      description: 'Midnight prayers and night vigil guidelines',
      category: 'prayer',
      icon: '🌙',
    },
  ]

  const categories = [
    { value: 'all', label: 'All Books' },
    { value: 'prayer', label: 'Prayer Books' },
    { value: 'devotion', label: 'Devotions' },
    { value: 'healing', label: 'Healing' },
    { value: 'prosperity', label: 'Prosperity' },
  ]

  const filtered = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Prayer Books</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Access our collection of prayer guides and spiritual resources
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search prayer books by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
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
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(book => (
            <div
              key={book.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all hover:scale-105 p-6"
            >
              <div className="text-5xl mb-4">{book.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {book.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                By {book.author}
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm">
                {book.description}
              </p>
              <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
                <BookOpen size={18} /> Read
              </button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <BookOpen size={48} className="mx-auto text-slate-400 mb-4" />
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              No prayer books found matching your search
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PrayerBooks
