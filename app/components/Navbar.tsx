"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, label, isActive, onClick }: NavLinkProps) => {
  const baseClasses = "font-semibold text-base uppercase tracking-wide transition-all duration-200 ease-in-out px-4 relative block lg:inline-block whitespace-nowrap";
  const linkStyles = {
    color: '#494E52',
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} group`}
      style={linkStyles}
      onClick={onClick}
    >
      {label}
      <span
        className={`absolute left-4 right-4 bottom-0 h-[0.109375rem] bg-[#5E376D] transition-opacity duration-200 ease-in-out lg:block hidden ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        style={{ transform: 'translateY(12px)' }}
      />
    </Link>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/events', label: 'EVENTS' },
    { href: '/contact', label: 'CONTACT US' },
    { href: '/faq', label: 'FAQ' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-4 lg:px-8 shadow-sm relative" style={{ backgroundColor: '#FCFCFF', height: '100px', minHeight: '100px' }}>
      {/* Logo Section */}
      <div className="flex items-center pl-4 lg:pl-8">
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

      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 pr-4"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={`block w-6 h-0.5 bg-[#494E52] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#494E52] transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#494E52] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-10 xl:gap-12 pr-8">
        {navigationItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            isActive={pathname === item.href}
          />
        ))}
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`absolute top-full left-0 w-full bg-[#FCFCFF] shadow-lg transition-all duration-300 lg:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
        <div className="flex flex-col py-4 pl-4">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={pathname === item.href}
              onClick={closeMenu}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
