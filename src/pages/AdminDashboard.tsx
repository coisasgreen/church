import { useState } from 'react'
import { useAuthStore } from '../store/authStore'
import { useNavigate } from 'react-router-dom'
import { BarChart3, Users, FileText, Calendar, MessageSquare, Settings, LogOut, Plus, Edit2, Trash2 } from 'lucide-react'

const AdminDashboard = () => {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [services, setServices] = useState<any[]>([])
  const [announcements, setAnnouncements] = useState<any[]>([])
  const [newAnnouncement, setNewAnnouncement] = useState('')

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Access Denied
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Only administrators can access this page
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const stats = [
    { label: 'Total Members', value: '1,234', icon: Users },
    { label: 'Services This Month', value: '12', icon: Calendar },
    { label: 'Active Testimonies', value: '45', icon: MessageSquare },
    { label: 'Total Donations', value: '$5,234', icon: FileText },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">Welcome, {user.displayName}</p>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'services', label: 'Services', icon: Calendar },
            { id: 'announcements', label: 'Announcements', icon: FileText },
            { id: 'users', label: 'Members', icon: Users },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-primary-600 hover:text-white'
                }`}
              >
                <Icon size={18} /> {tab.label}
              </button>
            )
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold">
                          {stat.label}
                        </p>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                          {stat.value}
                        </p>
                      </div>
                      <Icon className="text-primary-600 dark:text-primary-400" size={32} />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-left font-semibold flex items-center gap-2">
                    <Plus size={18} /> Add Service
                  </button>
                  <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-left font-semibold flex items-center gap-2">
                    <Plus size={18} /> Post Announcement
                  </button>
                  <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-left font-semibold flex items-center gap-2">
                    <Plus size={18} /> Send Notification
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Recent Activity</h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li>• 15 new testimonies posted today</li>
                  <li>• 3 new members registered</li>
                  <li>• 8 donations received</li>
                  <li>• 42 attendees for Sunday service</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Manage Services</h2>
            <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-lg text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-4">Services management interface</p>
              <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center gap-2">
                <Plus size={18} /> Add New Service
              </button>
            </div>
          </div>
        )}

        {/* Announcements Tab */}
        {activeTab === 'announcements' && (
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Announcements</h2>
            <div className="space-y-4">
              <textarea
                value={newAnnouncement}
                onChange={(e) => setNewAnnouncement(e.target.value)}
                placeholder="Write an announcement..."
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500"
                rows={4}
              />
              <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                Post Announcement
              </button>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Members Management</h2>
            <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-lg text-center">
              <p className="text-slate-600 dark:text-slate-400">Members list and management interface</p>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Settings</h2>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Church Name
                </label>
                <input
                  type="text"
                  defaultValue="Mountain of Fire and Miracle Ministry"
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                />
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Church Email
                </label>
                <input
                  type="email"
                  defaultValue="info@mfmm.com"
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                />
              </div>
              <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                Save Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
