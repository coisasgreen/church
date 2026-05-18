const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About MFMM
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Mountain of Fire and Miracle Ministry Mid-West Region 92
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              To spread the gospel of Jesus Christ, demonstrate the power of God through miracles and signs, 
              and build a strong community of believers committed to spiritual growth and service to humanity.
            </p>
          </section>

          <section className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              To establish a network of believers worldwide who are empowered by the Holy Spirit to transform 
              lives, heal the sick, cast out demons, and advance God's kingdom in all nations.
            </p>
          </section>

          <section className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What We Believe</h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 font-bold mt-1">•</span>
                <span>In the power of God through Jesus Christ our Lord and Savior</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 font-bold mt-1">•</span>
                <span>In the Holy Spirit's presence and power in our lives</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 font-bold mt-1">•</span>
                <span>In the authority given to believers to pray and intercede</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 font-bold mt-1">•</span>
                <span>In miracles, healing, and deliverance through faith in God</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 dark:text-primary-400 font-bold mt-1">•</span>
                <span>In loving and serving our community</span>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-900 dark:to-black rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="space-y-2">
              <p><strong>Address:</strong> Mid-West Region, Nigeria</p>
              <p><strong>Phone:</strong> +234 xxx xxx xxxx</p>
              <p><strong>Email:</strong> info@mfmm.com</p>
              <p><strong>Service Times:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>Sunday: 10:00 AM - 1:00 PM</li>
                <li>Wednesday: 7:00 PM - 9:00 PM</li>
                <li>Friday: 7:00 PM - 10:00 PM (Special Prayer)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
