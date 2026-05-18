# Church Website & Mobile Application

Mountain of Fire and Miracle Ministry Mid-West Region 92

## 🙏 Features

### For Users
- **Home Dashboard** - Welcome page with service countdown and testimonies
- **Service Schedule** - View upcoming services with countdown timers
- **Testimonies** - Share and read inspiring stories of faith
- **KJV Bible** - Complete Bible with search functionality
- **Hymns & Songs** - Search hymns with YouTube integration
- **Prayer Books** - Searchable collection of prayer guides
- **Events** - Upcoming church programs and events
- **Donations** - Secure online giving platform
- **About Us** - Church history and information
- **Contact** - Get in touch with the ministry

### For Admins
- **Admin Dashboard** - Complete management panel
- **Service Management** - Create and manage service schedules
- **Announcement Publishing** - Post announcements and updates
- **Event Management** - Create and manage church events
- **User Management** - View and manage members
- **Content Management** - Manage testimonies and resources
- **Notification System** - Send notifications to members

### Technical Features
- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Dark/Light Mode** - Theme toggle for comfortable viewing
- ✅ **Progressive Web App** - Install as mobile app
- ✅ **Offline Support** - Service worker caching
- ✅ **Real-time Notifications** - Stay updated with latest news
- ✅ **Secure Authentication** - User login and registration
- ✅ **Search Functionality** - Find content easily
- ✅ **YouTube Integration** - Stream hymns from YouTube
- ✅ **Countdown Timers** - Live service countdowns
- ✅ **Local Storage** - Offline data persistence

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/coisasgreen/church.git
cd church

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Demo Accounts

### Admin Account
- Email: `admin@mfmm.com`
- Password: Any password (demo mode)
- Access: Admin Dashboard

### User Account
- Email: `user@mfmm.com`
- Password: Any password (demo mode)
- Access: All user features

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── store/           # State management (Zustand)
├── services/        # API and service functions
├── utils/           # Utility functions
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Purple (#7e22ce) and White
- **Secondary**: Slate colors for text
- **Dark Mode**: Slate gray backgrounds

### Typography
- Font Family: Segoe UI, system fonts
- Responsive font sizes
- Smooth transitions and animations

## 🔧 Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **State Management**: Zustand
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Icons**: Lucide React
- **PWA**: Service Worker

## 📝 Features Details

### Countdown Timer
Service countdowns update every second, showing days, hours, minutes, and seconds until the next service.

### Notifications
Real-time notifications for new services, announcements, events, and prayer requests.

### Search Functionality
- Search prayers books by title and author
- Search hymns by title
- Search Bible verses
- Filter content by categories

### Dark Mode
Automatic detection of system preference with manual toggle option. Persisted in localStorage.

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interface
- Optimized images and assets

## 📲 Mobile App

The application can be installed as a PWA:
1. Open in a modern browser (Chrome, Firefox, Edge, Safari)
2. Look for "Install" button in browser address bar
3. Or use "Add to Home Screen" option
4. Launch as a native app

## 🔐 Security

- Email/password authentication
- Role-based access control (Admin/User)
- Secure local storage
- HTTPS ready
- Input validation and sanitization

## 📞 Contact

**Email**: info@mfmm.com
**Phone**: +234 xxx xxx xxxx
**Location**: Mid-West Region, Nigeria

## 📜 License

MIT License - feel free to use for personal or commercial projects

## 🙌 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Made with ❤️ for Mountain of Fire and Miracle Ministry**
