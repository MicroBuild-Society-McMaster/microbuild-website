import Link from 'next/link';

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#F4ECF5]"
    >
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-start px-8 lg:px-16 py-32 min-h-[600px]"
        style={{
          backgroundImage: "url('/models.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for background image opacity */}
        <div className="absolute inset-0 bg-black opacity-70 pointer-events-none" />
        <div className="relative z-10 flex-1 max-w-3xl">
          <h1
            className="text-6xl lg:text-7xl font-bold leading-tight -mt-10"
            style={{
              fontFamily: 'Barlow, sans-serif',
              color: '#5E376D',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            Design. Create.
          </h1>
          <h1
            className="text-6xl lg:text-7xl font-bold leading-tight"
            style={{
              fontFamily: 'Barlow, sans-serif',
              color: '#F9B939',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            Build in<br />miniature.
          </h1>
          <Link href="/about">
            <button
              className="px-8 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity mt-6 cursor-pointer"
              style={{
                backgroundColor: '#F9B939',
                fontFamily: 'Aileron, Arial, sans-serif',
                boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.2)'
              }}
            >
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="text-center px-8 lg:px-16 py-16">
        <h2
          className="text-5xl lg:text-6xl font-bold mb-8"
          style={{
            fontFamily: 'Alatsi, sans-serif',
            color: '#5E376D',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}
        >
          Welcome to MicroBuild Society
        </h2>
        <p
          className="text-xl lg:text-2xl leading-relaxed text-[#6D6471] max-w-4xl mx-auto mb-8"
          style={{ fontFamily: 'Aileron, Arial, sans-serif' }}
        >
          We are a new student society at McMaster for students who like miniature
          architecture, design, and creativity. Our goal is to give students a fun way to learn
          and build projects. Some workshops will include engineering and design concepts.
        </p>
        <a
          href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=B2M3RCm0rUKMJSjNSW9HclE4uDouKK5OpxuOTcd6WWtUOElCRVFVU1IwOTBXN1pDRkZQNjY3MldWVy4u&route=shorturl"
        >
          <button
            className="px-8 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            style={{
              backgroundColor: '#F9B939',
              fontFamily: 'Aileron, Arial, sans-serif',
              boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.2)'
            }}
          >
            Join Us
          </button>
        </a>
      </section>

      {/* ClubFest Section */}
      <section className="flex justify-center px-4 sm:px-8 lg:px-16 pb-16">
        <div className="relative max-w-4xl w-full">
          <div
            className="w-full min-h-96 rounded-lg flex flex-col justify-center items-center text-white p-4 sm:p-6 lg:p-8"
            style={{ backgroundColor: '#AA8CAE' }}
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-center leading-tight"
              style={{
                fontFamily: 'Alatsi, sans-serif',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              Catch us at ClubFest!
            </h2>
            <div
              className="text-center space-y-2 sm:space-y-3 max-w-3xl"
              style={{ fontFamily: 'Aileron, Arial, sans-serif' }}
            >
              <p className="text-lg sm:text-xl lg:text-2xl">
                <strong>Date and Time:</strong> September 17, 10 AM – 3 PM
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl">
                <strong>Location:</strong> Mills Plaza on the BSB Lawn
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl mt-3 sm:mt-4 leading-relaxed">
                Spin our prize wheel to win 3D-printed architectural
                <span className="hidden sm:inline"><br /></span>
                <span className="sm:hidden"> </span>
                landmark keychains and other fun prizes!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}