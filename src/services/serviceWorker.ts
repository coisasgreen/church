export async function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Workers not supported')
    return
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js')
    console.log('Service Worker registered:', registration)
  } catch (error) {
    console.error('Service Worker registration failed:', error)
  }
}

export async function unregisterServiceWorker() {
  if (!('serviceWorker' in navigator)) return

  try {
    const registrations = await navigator.serviceWorker.getRegistrations()
    for (let registration of registrations) {
      await registration.unregister()
    }
    console.log('Service Worker unregistered')
  } catch (error) {
    console.error('Service Worker unregistration failed:', error)
  }
}
