import { X, AlertCircle } from 'lucide-react'
import { useNotificationStore, Notification } from '../store/notificationStore'
import { useEffect } from 'react'

interface NotificationToastProps {
  notification: Notification
}

const NotificationToast = ({ notification }: NotificationToastProps) => {
  const { removeNotification } = useNotificationStore()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeNotification(notification.id)
    }, 5000)

    return () => clearTimeout(timer)
  }, [notification.id, removeNotification])

  const bgColor = {
    success: 'bg-green-50 dark:bg-green-900',
    error: 'bg-red-50 dark:bg-red-900',
    info: 'bg-blue-50 dark:bg-blue-900',
    warning: 'bg-yellow-50 dark:bg-yellow-900',
  }[notification.type]

  const borderColor = {
    success: 'border-green-200 dark:border-green-700',
    error: 'border-red-200 dark:border-red-700',
    info: 'border-blue-200 dark:border-blue-700',
    warning: 'border-yellow-200 dark:border-yellow-700',
  }[notification.type]

  const textColor = {
    success: 'text-green-800 dark:text-green-200',
    error: 'text-red-800 dark:text-red-200',
    info: 'text-blue-800 dark:text-blue-200',
    warning: 'text-yellow-800 dark:text-yellow-200',
  }[notification.type]

  return (
    <div
      className={`${bgColor} ${borderColor} ${textColor} border rounded-lg p-4 flex items-start gap-3 shadow-lg`}
    >
      <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <h3 className="font-semibold">{notification.title}</h3>
        <p className="text-sm mt-1">{notification.message}</p>
      </div>
      <button
        onClick={() => removeNotification(notification.id)}
        className="flex-shrink-0"
      >
        <X size={18} />
      </button>
    </div>
  )
}

const NotificationContainer = () => {
  const { notifications } = useNotificationStore()

  return (
    <div className="fixed top-20 right-4 z-40 space-y-2 max-w-md">
      {notifications.map((notification) => (
        <NotificationToast key={notification.id} notification={notification} />
      ))}
    </div>
  )
}

export default NotificationContainer
