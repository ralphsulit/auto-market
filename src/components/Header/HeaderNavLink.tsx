'use client';

// ** React Imports
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderNavLinkProps {
  href: string;
  children: ReactNode;
}

const HeaderNavLink: React.FC<HeaderNavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`hover:text-primary p-2 ${
        active ||
        (href.startsWith('/dashboard') &&
          pathname.startsWith('/dashboard'))
          ? 'text-black font-semibold'
          : 'text-gray-500'
      }`}
    >
      {children}
    </Link>
  );
};

export default HeaderNavLink;