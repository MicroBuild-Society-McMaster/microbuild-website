"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

const NavLink = ({ href, label, isActive }: NavLinkProps) => {
  const baseClasses = "font-semibold text-base uppercase tracking-wide transition-all duration-200 ease-in-out px-4 relative";
  const linkStyles = {
    color: '#494E52',
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} group`}
      style={linkStyles}
    >
      {label}
      <span
        className={`absolute left-4 right-4 bottom-0 h-[0.109375rem] bg-[#5E376D] transition-opacity duration-200 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        style={{ transform: 'translateY(12px)' }}
      />
    </Link>
  );
};

export default function Navbar() {
  const pathname = usePathname();

  const navigationItems = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/events', label: 'EVENTS' },
    { href: '/contact', label: 'CONTACT US' },
    { href: '/faq', label: 'FAQ' }
  ];

  return (
    <nav className="flex items-center justify-between px-8 shadow-sm" style={{ backgroundColor: '#FCFCFF', height: '100px', minHeight: '100px' }}>
      {/* Logo Section */}
      <div className="flex items-center" style={{ marginLeft: '35px' }}>
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="MicroBuild Society Logo"
            width={467}
            height={433}
            className="h-20 w-auto"
            priority
          />
        </Link>
      </div>

      {/* Navigation Links Section */}
      <div className="flex items-center" style={{ gap: '40px', paddingRight: '40px' }}>
        {navigationItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            isActive={pathname === item.href}
          />
        ))}
      </div>
    </nav>
  );
}
