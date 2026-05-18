import { useState } from 'react'
import { Search, Music, Volume2, ExternalLink } from 'lucide-react'

interface Hymn {
  id: string
  title: string
  lyrics: string
  category: string
  youtubeUrl?: string
}

const Hymns = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedHymn, setSelectedHymn] = useState<Hymn | null>(null)

  const hymns: Hymn[] = [
    {
      id: '1',
      title: 'Amazing Grace',
      lyrics: `Amazing grace, how sweet the sound\nThat saved a wretch like me\nI once was lost, but now am found\nWas blind but now I see`,
      category: 'hymns',
      youtubeUrl: 'https://www.youtube.com/embed/X6jxDUTzbbE',
    },
    {
      id: '2',
      title: 'Great Is Thy Faithfulness',
      lyrics: `Great is thy faithfulness, O God my Father\nThere is no shadow of turning with thee\nThou changest not, thy compassions they fail not\nAs thou hast been thou forever will be`,
      category: 'hymns',
      youtubeUrl: 'https://www.youtube.com/embed/xZMN4ZQRJYE',
    },
    {
      id: '3',
      title: 'How Great Thou Art',
      lyrics: `O Lord my God, when I in awesome wonder\nConsider all the worlds thy hands have made\nI see the stars, I hear the rolling thunder\nThy power throughout the universe displayed`,
      category: 'hymns',
      youtubeUrl: 'https://www.youtube.com/embed/uAYoF38NZJE',
    },
    {
      id: '4',
      title: 'Jesus Loves Me',
      lyrics: `Jesus loves me, this I know\nFor the Bible tells me so\nLittle ones to him belong\nThey are weak, but he is strong`,
      category: 'worship',
      youtubeUrl: 'https://www.youtube.com/embed/jtKKAEsKNkc',
    },
  ]

  const categories = [
    { value: 'all', label: 'All Hymns' },
    { value: 'hymns', label: 'Traditional Hymns' },
    { value: 'worship', label: 'Worship Songs' },
    { value: 'gospel', label: 'Gospel' },
  ]

  const filtered = hymns.filter(hymn => {
    const matchesSearch = hymn.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || hymn.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Hymns & Songs</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Search and listen to worship hymns and songs
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search hymns by title..."
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hymns List */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 max-h-96 overflow-y-auto">
              {filtered.map(hymn => (
                <button
                  key={hymn.id}
                  onClick={() => setSelectedHymn(hymn)}
                  className={`w-full text-left p-3 rounded-lg mb-2 transition-colors ${
                    selectedHymn?.id === hymn.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-primary-100 dark:hover:bg-primary-900'
                  }`}
                >
                  <p className="font-semibold text-sm">{hymn.title}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Hymn Detail */}
          <div className="lg:col-span-2">
            {selectedHymn ? (
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-200 dark:border-slate-700">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  {selectedHymn.title}
                </h2>

                {/* YouTube Player */}
                {selectedHymn.youtubeUrl && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="315"
                      src={selectedHymn.youtubeUrl}
                      title="Hymn"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}

                {/* Lyrics */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Lyrics</h3>
                  <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                    {selectedHymn.lyrics}
                  </p>
                </div>

                <div className="flex gap-4">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    <Volume2 size={20} /> Listen on YouTube
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-12 text-center border border-slate-200 dark:border-slate-700">
                <Music size={48} className="mx-auto text-slate-400 mb-4" />
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  Select a hymn to view lyrics and listen
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hymns
