import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeStore {
  isDark: boolean
  toggleTheme: () => void
  initTheme: () => void
}

export const useThemeStore = create<ThemeStore>(
  persist(
    (set) => ({
      isDark: false,
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
      initTheme: () => {
        const isDark = localStorage.getItem('theme') === 'dark' ||
          (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
        set({ isDark })
      },
    }),
    {
      name: 'theme-store',
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name)
          return item ? JSON.parse(item) : null
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value))
          localStorage.setItem('theme', value.state.isDark ? 'dark' : 'light')
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
)
