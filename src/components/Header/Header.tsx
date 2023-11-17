// ** React Imports
import Image from 'next/image';
import Link from 'next/link';

// ** Components
import HeaderNavLink from './HeaderNavLink';
import Button from '../Button/Button';

import { jost } from '@/app/ui/fonts';

const menuItems = [
  { label: `Home`, url: '/' },
  { label: `About`, url: '/about'},
  { label: `Contact`, url: '/contact'},
  { label: `Models`, url: '/models'},
  { label: `Dashboard`, url: '/dashboard' },
];

const Header = () => {
  return(
    <header className='flex flex-col p-9'>
      <div className='py-4 flex items-center justify-between'>
        <Link href='/'>
          <h1 className={`${jost.className} text-3xl`}>
            AutoMarket<span className='text-4xl text-primary'>.</span>
          </h1>
        </Link>
        <nav>
          <ul className='flex flex-wrap gap-x-8 text-gray-900'>
            {menuItems.map(({ url, label }, i) => (
              <li key={i}>
                <HeaderNavLink href={url}>{label}</HeaderNavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link href='/'>
          <Button />
        </Link>
      </div>
    </header>
  );
};

export default Header;