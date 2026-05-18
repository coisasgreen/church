import { useState } from 'react'
import { Heart, DollarSign, CreditCard, Info } from 'lucide-react'
import { useNotificationStore } from '../store/notificationStore'

const Donations = () => {
  const [amount, setAmount] = useState('50')
  const [donationType, setDonationType] = useState('general')
  const [isProcessing, setIsProcessing] = useState(false)
  const { addNotification } = useNotificationStore()

  const presetAmounts = [10, 25, 50, 100, 250, 500]

  const donationTypes = [
    { value: 'general', label: 'General Fund', description: 'Support our ministry' },
    { value: 'building', label: 'Building Fund', description: 'Help build our new sanctuary' },
    { value: 'missions', label: 'Missions', description: 'Support missionary work' },
    { value: 'welfare', label: 'Welfare Fund', description: 'Help those in need' },
  ]

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      addNotification({
        title: 'Thank You!',
        message: `Your donation of $${amount} has been received. God bless you!`,
        type: 'success',
      })
      setAmount('50')
    } catch (error) {
      addNotification({
        title: 'Error',
        message: 'Donation could not be processed',
        type: 'error',
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Support Our Ministry</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Your generous donation helps us serve our community better
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleDonate} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Make a Donation</h2>

              {/* Donation Type */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  Donation Type
                </label>
                <div className="space-y-3">
                  {donationTypes.map(type => (
                    <label key={type.value} className="flex items-center p-4 border rounded-lg cursor-pointer transition-colors" className={`${
                      donationType === type.value
                        ? 'bg-primary-50 dark:bg-primary-900 border-primary-500'
                        : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600'
                    }`}>
                      <input
                        type="radio"
                        name="donationType"
                        value={type.value}
                        checked={donationType === type.value}
                        onChange={(e) => setDonationType(e.target.value)}
                        className="w-4 h-4 text-primary-600"
                      />
                      <div className="ml-3">
                        <p className="font-semibold text-slate-900 dark:text-white">{type.label}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{type.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  Amount
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
                  {presetAmounts.map(preset => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAmount(preset.toString())}
                      className={`px-3 py-3 rounded-lg font-semibold transition-colors ${
                        amount === preset.toString()
                          ? 'bg-primary-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-primary-600 hover:text-white'
                      }`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-3 text-slate-400" size={20} />
                  <input
                    type="number"
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start gap-3">
                  <CreditCard className="text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Payment Method</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Secure payment via credit card. Your donation is encrypted and safe.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white rounded-lg font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Heart size={20} />
                {isProcessing ? `Processing $${amount}...` : `Donate $${amount}`}
              </button>
            </form>
          </div>

          {/* Information */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg p-6 border border-primary-200 dark:border-primary-700">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-primary-600 dark:text-primary-400" size={24} />
                <h3 className="text-lg font-bold text-primary-900 dark:text-primary-100">Why Donate?</h3>
              </div>
              <ul className="space-y-2 text-sm text-primary-800 dark:text-primary-200">
                <li>✓ Support community outreach</li>
                <li>✓ Fund missionary work</li>
                <li>✓ Maintain our facilities</li>
                <li>✓ Help those in need</li>
                <li>✓ Advance God's kingdom</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <Info className="text-primary-600 dark:text-primary-400" size={24} />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Tax Info</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                We are a registered non-profit organization. Your donation may be tax-deductible. Please consult your tax advisor.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Other Ways to Give</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>Bank Transfer</li>
                <li>Check/Money Order</li>
                <li>Mobile Payment</li>
                <li>Recurring Donations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donations
