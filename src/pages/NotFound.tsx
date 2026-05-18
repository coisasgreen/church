const NotFound = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Page Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
}

export default NotFound
