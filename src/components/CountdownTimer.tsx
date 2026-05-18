import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'

interface CountdownTimerProps {
  targetDate: Date
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  } | null>(null)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft(null)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!timeLeft) return null

  return (
    <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg border border-primary-200 dark:border-primary-700">
      <Clock className="text-primary-600 dark:text-primary-400 flex-shrink-0" />
      <div className="flex-1">
        <p className="text-sm font-semibold text-primary-900 dark:text-primary-100">
          Service starts in:
        </p>
        <div className="flex gap-4 mt-2">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="text-2xl font-bold text-primary-700 dark:text-primary-300">
                {String(value).padStart(2, '0')}
              </div>
              <p className="text-xs text-primary-600 dark:text-primary-400 uppercase">
                {unit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer
