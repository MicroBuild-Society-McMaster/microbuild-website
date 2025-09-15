export default function Home() {
  return (
    <main className="bg-[#f7eaf5] min-h-screen p-8 border-t-4 border-blue-400">
      <div style={{ paddingLeft: '2rem' }}>
        <h1 className="text-5xl font-bold mb-6" style={{ color: '#5E376D' }}>Design. Create.</h1>
        <h1 className="text-5xl font-bold mb-6" style={{ color: '#F9B939' }}>Build in</h1>
        <h1 className="text-5xl font-bold mb-6" style={{ color: '#F9B939' }}>miniature.</h1>
        <button className="bg-yellow-400 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-300 transition">
          Learn More
        </button>

        <section className="text-center">
        <h1 className="mt-20 text-5xl font-bold mb-6" style={{ color: '#5E376D'}}>Welcome to MicroBuild Society</h1>
        <p className="text-xl leading-relaxed text-[#6D6471] text-lg">
          We are a new student society at McMaster for students who like miniature <br></br>architecture design, and creativity.
          Our goal is to give students a fun way to learn <br></br>and build projects. Some workshops will include engineering and design concepts.
        </p>
        <a
          href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=B2M3RCm0rUKMJSjNSW9HclE4uDouKK5OpxuOTcd6WWtUOElCRVFVU1IwOTBXN1pDRkZQNjY3MldWVy4u&route=shorturl"
        >
          <button className="mt-6 bg-yellow-400 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-300 transition">
            Join Us
          </button>
        </a>
      </section>

      <section className="text-center">
      <div className="mt-20 inline-block bg-purple-400 text-5xl font-bold mb-6" style={{ backgroundColor: '#AA8CAE' }}>
        <h1 className="mt-6 text-5xl font-bold mb-6" style={{ color: '#ffffffff'}}>Catch us at ClubFest!</h1>
        <div className="p-8 text-left text-white" >
          <p className="text-lg mb-4">
            <strong>Date and Time:</strong> September 17, 10 AM – 3 PM<br />
            <strong>Location:</strong> Mills Plaza on the BSB Lawn
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Spin our prize wheel to win 3D-printed architectural <br></br>landmark keychains and other fun prizes!</li>
          </ul>
        </div>
      </div>
    </section>

      </div>
    </main>
  );
}