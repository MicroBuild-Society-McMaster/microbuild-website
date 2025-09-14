"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between px-8 shadow-sm" style={{ backgroundColor: '#FCFCFF', height: '100px', minHeight: '100px' }}>
      {/* Logo Section */}
      <div className="flex items-center" style={{ marginLeft: '35px' }}>
        <Link href="/" className="flex items-center">
          <Image
            src="/microbuildlogo.png"
            alt="MicroBuild Society Logo"
            width={150}
            height={75}
            className="h-18 w-auto"
          />
        </Link>
      </div>

      {/* Navigation Links Section */}
      <div className="flex items-center" style={{ gap: '40px', paddingRight: '40px' }}>
        <Link href="/" className={`font-medium text-base uppercase tracking-wide transition-colors duration-200 px-4 no-underline ${pathname === '/' ? 'underline' : ''}`} style={{ color: 'black' }}>HOME</Link>
        <Link href="/about" className={`font-medium text-base uppercase tracking-wide transition-colors duration-200 px-4 no-underline ${pathname === '/about' ? 'underline' : ''}`} style={{ color: 'black' }}>ABOUT US</Link>
        <Link href="/events" className={`font-medium text-base uppercase tracking-wide transition-colors duration-200 px-4 no-underline ${pathname === '/events' ? 'underline' : ''}`} style={{ color: 'black' }}>EVENTS</Link>
        <Link href="/contact" className={`font-medium text-base uppercase tracking-wide transition-colors duration-200 px-4 no-underline ${pathname === '/contact' ? 'underline' : ''}`} style={{ color: 'black' }}>CONTACT US</Link>
        <Link href="/faq" className={`font-medium text-base uppercase tracking-wide transition-colors duration-200 px-4 no-underline ${pathname === '/faq' ? 'underline' : ''}`} style={{ color: 'black' }}>FAQ</Link>
      </div>
    </nav>
  );
}
