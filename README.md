# Mountain of Fire and Miracle Ministry Church App

A comprehensive church website and mobile application for the Mountain of Fire and Miracle Ministry Mid-West Region 92.

## Features

### User Features
- **Service Schedule**: View upcoming services with countdown timers
- **Testimonies**: Share and read inspiring faith stories
- **KJV Bible**: Built-in Bible viewer with search functionality
- **Hymns & Songs**: Search and listen to worship hymns with YouTube integration
- **Prayer Books**: Access a library of prayer guides and resources
- **Events Calendar**: Stay updated with church events and programs
- **Donations**: Secure online giving platform
- **Notifications**: Real-time updates for new content and events
- **User Authentication**: Secure registration and login

### Admin Features
- **Dashboard**: Overview of church statistics and activities
- **Service Management**: Create, edit, and delete service schedules
- **Announcements**: Post important announcements
- **Prayer Books Management**: Upload and manage prayer books
- **Hymns Management**: Add and organize hymns
- **Member Management**: View and manage church members
- **Settings**: Configure church information

### Technical Features
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Light/Dark Mode**: Theme toggle for user preference
- **Progressive Web App**: Installable as a native app
- **Offline Support**: Works offline with service workers
- **Real-time Notifications**: Push notifications for important updates
- **Purple & White Design**: Church-themed color scheme
- **Fast Performance**: Optimized for quick loading

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Vite
- **PWA**: Service Workers

## Getting Started

### Prerequisites
- Node.js 16+ and npm

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

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CountdownTimer.tsx
│   └── NotificationContainer.tsx
├── pages/            # Page components
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Testimonies.tsx
│   ├── Bible.tsx
│   ├── Hymns.tsx
│   ├── PrayerBooks.tsx
│   ├── Events.tsx
│   ├── Donations.tsx
│   ├── AdminDashboard.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── store/            # Zustand stores
│   ├── themeStore.ts
│   ├── authStore.ts
│   └── notificationStore.ts
├── services/         # API and utilities
│   └── serviceWorker.ts
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Demo Credentials

- **Admin Account**: admin@mfmm.com (any password)
- **User Account**: user@example.com (any password)

## Features in Detail

### Service Schedule
- View all upcoming church services
- See speaker names and service descriptions
- Real-time countdown timer for next service
- Register for services
- Admin can create and manage services

### Testimonies System
- Users can share their faith stories
- Like and interact with testimonies
- Search and filter testimonies
- Admin moderation tools

### KJV Bible
- Search verses by keyword
- Adjust font size for readability
- Navigate between books and chapters
- Mobile-friendly reading experience

### Hymns & Worship
- Search hymns by title
- View complete lyrics
- YouTube video integration
- Listen to hymns directly
- Category filters

### Prayer Resources
- Categorized prayer books
- Search functionality
- Download prayer guides
- Prayer book recommendations

### Events Management
- Upcoming events calendar
- Event details and location
- RSVP functionality
- Event categories and filtering

### Donations
- Secure payment processing
- Multiple donation options
- Donation category selection
- Receipt generation

### Admin Dashboard
- Comprehensive statistics
- Quick actions panel
- Member management
- Content management
- Settings configuration

## Responsive Design

The application is fully responsive and optimized for:
- **Mobile**: iOS and Android devices
- **Tablet**: iPad and Android tablets
- **Desktop**: Windows, Mac, and Linux

## Accessibility

- WCAG 2.1 compliance
- Keyboard navigation support
- Screen reader friendly
- High contrast dark mode
- Readable font sizes

## Future Enhancements

- [ ] Integration with Firebase for real-time database
- [ ] Video sermon library
- [ ] Live streaming capabilities
- [ ] Member community forum
- [ ] Prayer request tracking
- [ ] Tithe and offering management
- [ ] Member directory
- [ ] Mobile app stores

## License

This project is licensed under the MIT License.

## Support

For issues, suggestions, or feedback, please open an issue on GitHub or contact info@mfmm.com.

## Credits

Developed with ❤️ for Mountain of Fire and Miracle Ministry Mid-West Region 92.
