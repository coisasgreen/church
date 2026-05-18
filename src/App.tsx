import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useThemeStore } from './store/themeStore'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Testimonies from './pages/Testimonies'
import Bible from './pages/Bible'
import Hymns from './pages/Hymns'
import PrayerBooks from './pages/PrayerBooks'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Events from './pages/Events'
import Donations from './pages/Donations'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const { isDark, initTheme } = useThemeStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    initTheme()
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-slate-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonies" element={<Testimonies />} />
            <Route path="/bible" element={<Bible />} />
            <Route path="/hymns" element={<Hymns />} />
            <Route path="/prayer-books" element={<PrayerBooks />} />
            <Route path="/events" element={<Events />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
