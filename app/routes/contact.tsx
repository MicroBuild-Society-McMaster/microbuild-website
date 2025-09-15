import Image from 'next/image';

export default function ContactPage() {
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
                    Contact Us
                </h1>

                <div className="space-y-8">
                    {/* Email Section */}
                    <div className="flex items-center gap-4">
                        <Image
                            src="/fireball-purple.svg"
                            alt="Email"
                            width={32}
                            height={32}
                            className="h-8 w-8"
                        />
                        <p className="text-xl text-[#6D6471]" style={{ fontFamily: 'Aileron, Arial, sans-serif', lineHeight: '1.8' }}>
                            Get in touch with us by email:{' '}
                            <a
                                href="mailto:mbs@mcmaster.ca"
                                className="text-[#5E376D] hover:underline font-semibold"
                            >
                                mbs@mcmaster.ca
                            </a>
                        </p>
                    </div>

                    {/* Instagram Section */}
                    <div className="flex items-center gap-4">
                        <Image
                            src="/instagram.svg"
                            alt="Instagram"
                            width={32}
                            height={32}
                            className="h-8 w-8"
                            style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(30%) saturate(2027%) hue-rotate(250deg) brightness(95%) contrast(86%)' }}
                        />
                        <p className="text-xl text-[#6D6471]" style={{ fontFamily: 'Aileron, Arial, sans-serif', lineHeight: '1.8' }}>
                            Follow us on Instagram to stay up-to-date with MicroBuild:{' '}
                            <a
                                href="https://www.instagram.com/microbuildmcmaster"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#5E376D] hover:underline font-semibold"
                            >
                                @microbuildmcmaster
                            </a>
                        </p>
                    </div>

                    {/* LinkedIn Section */}
                    <div className="flex items-center gap-4">
                        <Image
                            src="/linkedin.svg"
                            alt="LinkedIn"
                            width={32}
                            height={32}
                            className="h-8 w-8"
                            style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(30%) saturate(2027%) hue-rotate(250deg) brightness(95%) contrast(86%)' }}
                        />
                        <p className="text-xl text-[#6D6471]" style={{ fontFamily: 'Aileron, Arial, sans-serif', lineHeight: '1.8' }}>
                            Check out our{' '}
                            <a
                                href="https://www.linkedin.com/company/microbuild-society-mcmaster"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#5E376D] hover:underline font-semibold"
                            >
                                LinkedIn
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}