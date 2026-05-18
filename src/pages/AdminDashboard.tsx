import { useState } from 'react'
import { BarChart3, Users, FileText, Calendar, Settings, LogOut } from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  if (user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Access Denied</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            You do not have permission to access this page.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const stats = [
    { label: 'Total Users', value: '1,250', icon: '👥' },
    { label: 'Active Members', value: '980', icon: '✓' },
    { label: 'Services', value: '24', icon: '📅' },
    { label: 'Testimonies', value: '156', icon: '💬' },
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'content', label: 'Content', icon: '📝' },
    { id: 'events', label: 'Events', icon: '📅' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 shadow-lg border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{stat.label}</p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex flex-wrap gap-2 p-4 border-b border-slate-200 dark:border-slate-700">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Dashboard Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Recent Activity</h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>✓ 5 new testimonies posted today</li>
                      <li>✓ 2 services scheduled</li>
                      <li>✓ 12 new members joined</li>
                      <li>✓ 3 prayer requests submitted</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">System Status</h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>✓ Database: Connected</li>
                      <li>✓ Server: Running</li>
                      <li>✓ API: Operational</li>
                      <li>✓ Storage: 45% used</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">User Management</h2>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                  <p className="text-slate-600 dark:text-slate-400">User management tools and analytics coming soon...</p>
                </div>
              </div>
            )}

            {activeTab === 'content' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Content Management</h2>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                  <p className="text-slate-600 dark:text-slate-400">Manage testimonies, announcements, and resources here...</p>
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Event Management</h2>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                  <p className="text-slate-600 dark:text-slate-400">Create and manage church events and programs...</p>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Settings</h2>
                <div className="space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Church Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Mountain of Fire and Miracle Ministry"
                      className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      defaultValue="info@mfmm.com"
                      className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <button className="px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Save Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
