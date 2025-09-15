import Image from 'next/image';

export default function Footer() {
    return (
        <>
            {/* Skyline positioned above footer */}
            <div
                className="w-full h-17"
                style={{
                    backgroundColor: '#5E376D',
                    maskImage: "url('/skyline.svg')",
                    maskRepeat: 'repeat-x',
                    maskSize: 'auto 100%',
                    maskPosition: 'left bottom',
                    WebkitMaskImage: "url('/skyline.svg')",
                    WebkitMaskRepeat: 'repeat-x',
                    WebkitMaskSize: 'auto 100%',
                    WebkitMaskPosition: 'left bottom'
                }}
            />

            <footer className="bg-[#5E376D] text-[#FCFCFF] py-6">
                {/* Desktop Layout */}
                <div className="hidden md:flex items-center pl-8 lg:pl-16 pr-4 lg:pr-16 w-full">
                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.linkedin.com/company/microbuild-society-mcmaster"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform duration-200"
                        >
                            <Image
                                src="/linkedin.svg"
                                alt="LinkedIn"
                                width={50}
                                height={50}
                                className="h-12 w-auto filter brightness-0 invert"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/microbuildmcmaster"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform duration-200"
                        >
                            <Image
                                src="/instagram.svg"
                                alt="Instagram"
                                width={50}
                                height={50}
                                className="h-12 w-auto"
                            />
                        </a>
                        <a
                            href="https://www.mcmaster.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform duration-200"
                        >
                            <Image
                                src="/fireball.svg"
                                alt="Fireball"
                                width={50}
                                height={50}
                                className="h-12 w-auto"
                            />
                        </a>
                    </div>

                    {/* Dividing Line */}
                    <div className="h-16 w-px bg-white mx-8 opacity-60"></div>

                    {/* University Text */}
                    <div className="text-white text-sm mb-0.5">
                        <p>
                            McMaster University<br />
                            1280 Main St W, Hamilton, ON, L8S 4L8<br />
                            mbs@mcmaster.ca
                        </p>
                    </div>

                    {/* spacer pushes logo to far right */}
                    <div className="flex-1" />

                    {/* MSU Logo on far right */}
                    <a
                        className="hover:scale-110 transition-transform duration-200"
                        href="https://msumcmaster.ca/initiative/microbuild-society"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/msu.svg"
                            alt="MSU Logo"
                            width={100}
                            height={80}
                            className="h-16 w-auto"
                        />
                    </a>
                </div>

                {/* Mobile Layout */}
                {/* Mobile Layout */}
                <div className="md:hidden pl-8 lg:pl-16 pr-4 lg:pr-8 space-y-6">
                    {/* University Text - Top on mobile */}
                    <div className="text-white text-sm text-center">
                        <p>
                            McMaster University<br />
                            1280 Main St W, Hamilton, ON, L8S 4L8<br />
                            mbs@mcmaster.ca
                        </p>
                    </div>

                    {/* Social Icons - Center on mobile */}
                    <div className="flex items-center justify-center gap-6">
                        <a
                            href="https://www.linkedin.com/company/microbuild-society-mcmaster"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform duration-200"
                        >
                            <Image
                                src="/linkedin.svg"
                                alt="LinkedIn"
                                width={40}
                                height={40}
                                className="h-10 w-auto filter brightness-0 invert"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/microbuildmcmaster"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform duration-200"
                        >
                            <Image
                                src="/instagram.svg"
                                alt="Instagram"
                                width={40}
                                height={40}
                                className="h-10 w-auto"
                            />
                        </a>
                        <a
                            href="https://www.mcmaster.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform duration-200"
                        >
                            <Image
                                src="/fireball.svg"
                                alt="Fireball"
                                width={40}
                                height={40}
                                className="h-10 w-auto"
                            />
                        </a>
                    </div>

                    {/* MSU Logo - Bottom center on mobile */}
                    <div className="flex justify-center">
                        <a
                            className="hover:scale-110 transition-transform duration-200"
                            href="https://msumcmaster.ca/initiative/microbuild-society"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/msu.svg"
                                alt="MSU Logo"
                                width={80}
                                height={64}
                                className="h-12 w-auto"
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}