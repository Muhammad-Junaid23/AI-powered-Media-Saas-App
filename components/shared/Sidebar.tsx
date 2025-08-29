'use client';

import { navLinks } from '@/constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import Logo from './Logo';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-4'>
        <Link href='/' className='sidebar-logo'>
          <Logo width={180} height={28} />
        </Link>

        <nav className='sidebar-nav'>
          <SignedIn>
            <ul className='sidebar-nav_elements'>
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'active' : ''}`}>
                    <Link className='sidebar-link' href={link.route}>
                      <Image
                        src={link.icon}
                        alt='logo'
                        width={24}
                        height={24}
                        className={`transition-all duration-300 ${
                          isActive ? 'brightness-200' : 'brightness-75 group-hover:brightness-100'
                        }`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className='sidebar-nav_elements'>
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'active' : ''}`}>
                    <Link className='sidebar-link' href={link.route}>
                      <Image
                        src={link.icon}
                        alt='logo'
                        width={24}
                        height={24}
                        className={`transition-all duration-300 ${
                          isActive ? 'brightness-200' : 'brightness-75 group-hover:brightness-100'
                        }`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li className='flex-center cursor-pointer gap-2 p-4 rounded-2xl transition-all duration-300 hover:bg-cyan-900/20'>
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className='button cyber-gradient-primary'>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
