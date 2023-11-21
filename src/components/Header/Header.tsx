// ** React Imports
import Image from 'next/image';
import Link from 'next/link';

// ** Components
import HeaderNavLink from './header-nav-link';

import { jost } from '@/components/fonts';

const menuItems = [
  { label: `Home`, url: '/' },
  { label: `About`, url: '/about'},
  { label: `Contact`, url: '/contact'},
  { label: `Models`, url: '/models'},
  { label: `Dashboard`, url: '/dashboard' },
];

const Header = () => {
  return(
    <header className='flex flex-col'>
      <nav className='container relative flex items-center justify-between px-6 py-8 mx-auto'>
        <div className='container flex flex-col items-center mx-auto'>
          <Link href='/'>
            <h1 className={`${jost.className} text-3xl`}>
              AutoMarket<span className='text-4xl text-primary'>.</span>
            </h1>
          </Link>
          <div className='flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300'>
            <ul className='flex text-gray-900'>
              {menuItems.map(({ url, label }, i) => (
                <li key={i}>
                  <HeaderNavLink href={url}>{label}</HeaderNavLink>
                </li>
              ))}
          </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;