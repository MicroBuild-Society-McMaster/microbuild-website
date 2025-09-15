export default function AboutPage() {
  return (
    <main className="bg-[#F4ECF5] pl-8 lg:pl-16 pr-4 lg:pr-8 py-16">
      <div className="w-full">
        <h1
          className="text-7xl font-bold mb-12 text-[#5E376D] text-left"
          style={{
            fontFamily: 'Alatsi, sans-serif',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}
        >
          About Us
        </h1>
        <p
          className="text-xl leading-relaxed text-[#6D6471] w-full text-left"
          style={{
            fontFamily: 'Aileron, Arial, sans-serif',
            lineHeight: '1.8'
          }}
        >
          MicroBuild Society is where creativity and architecture meet at McMaster University. We use 3D modeling to craft detailed miniature models, bringing big ideas to life on a small scale. Whether you&apos;re an architecture student or just curious about design, our beginner-friendly workshops are the perfect place to build skills, make new friends, and create something unique.
        </p>
      </div>
    </main>
  );
}
