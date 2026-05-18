import { ArrowRight, Download, Users, BookOpen, Music, Heart, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import CountdownTimer from '../components/CountdownTimer'
import { useState, useEffect } from 'react'

const Home = () => {
  const [nextService, setNextService] = useState<Date | null>(null)
  const [testimonials, setTestimonials] = useState<any[]>([])

  useEffect(() => {
    // Set next service time (example: Sunday at 10 AM)
    const nextSunday = new Date()
    nextSunday.setDate(nextSunday.getDate() + (7 - nextSunday.getDay()) % 7)
    nextSunday.setHours(10, 0, 0, 0)
    setNextService(nextSunday)

    // Load testimonials from localStorage
    const saved = localStorage.getItem('testimonials')
    if (saved) {
      setTestimonials(JSON.parse(saved).slice(0, 3))
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-900 dark:via-primary-800 dark:to-black text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Mountain of Fire and Miracle Ministry
              </h1>
              <p className="text-lg sm:text-xl text-primary-100 mb-8">
                Welcome to our spiritual community. Experience faith, fellowship, and transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  Join Us <ArrowRight className="ml-2" size={20} />
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
                  <Download className="mr-2" size={20} /> Download App
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-full h-96 bg-gradient-to-br from-white to-primary-100 dark:from-slate-800 dark:to-primary-900 rounded-3xl flex items-center justify-center text-6xl">
                🙏
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      {nextService && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <CountdownTimer targetDate={nextService} />
        </section>
      )}

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-8 h-8" />,
              title: 'Testimonies',
              description: 'Share and read inspiring stories of faith and transformation',
              link: '/testimonies',
            },
            {
              icon: <BookOpen className="w-8 h-8" />,
              title: 'KJV Bible',
              description: 'Study Scripture with our built-in Bible viewer',
              link: '/bible',
            },
            {
              icon: <Music className="w-8 h-8" />,
              title: 'Hymns & Songs',
              description: 'Search and listen to worship hymns',
              link: '/hymns',
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: 'Service Schedule',
              description: 'Stay updated with our service times and events',
              link: '/services',
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: 'Prayer Books',
              description: 'Access our collection of prayer guides and resources',
              link: '/prayer-books',
            },
            {
              icon: <Heart className="w-8 h-8" />,
              title: 'Donations',
              description: 'Support our ministry with secure donations',
              link: '/donations',
            },
          ].map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="group p-8 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Testimonies */}
      {testimonials.length > 0 && (
        <section className="bg-slate-50 dark:bg-slate-800 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
              Recent Testimonies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.author?.[0] || 'A'}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {testimonial.author || 'Anonymous'}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {new Date(testimonial.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 line-clamp-4">
                    {testimonial.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/testimonies"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                View All Testimonies <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-900 dark:to-black text-white py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Experience the power of faith and fellowship. Download our app today and stay connected.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              <Download className="mr-2" size={20} /> iOS App
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              <Download className="mr-2" size={20} /> Android App
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
