import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Testimonies', href: '/testimonies' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-slate-900 dark:bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <Heart size={20} />
              </div>
              <h3 className="font-bold text-lg">MFMM</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Mountain of Fire and Miracle Ministry Mid-West Region 92
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin size={16} />
                <span>Mid-West Region</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Phone size={16} />
                <span>+234 xxx xxx xxxx</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Mail size={16} />
                <span>info@mfmm.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/bible"
                  className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Bible
                </Link>
              </li>
              <li>
                <Link
                  to="/hymns"
                  className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Hymns
                </Link>
              </li>
              <li>
                <Link
                  to="/prayer-books"
                  className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Prayer Books
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">
              Get updates about services and events
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg bg-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="w-full px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
              {subscribed && (
                <p className="text-green-400 text-sm">Thanks for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-2 bg-slate-800 hover:bg-primary-600 rounded-lg transition-colors"
                title={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-slate-400 text-sm">
            &copy; 2026 MFMM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
