'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import Logo from './Logo';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className='header'>
      <Link href='/' className='flex items-center gap-2 md:py-2'>
        <Logo width={180} height={28} />
      </Link>

      <nav className='flex gap-2'>
        <SignedIn>
          <UserButton afterSignOutUrl='/' />

          <Sheet>
            <SheetTrigger>
              <Image
                src='/assets/icons/menu.svg'
                alt='menu'
                width={32}
                height={32}
                className='cursor-pointer transition-all duration-300 hover:brightness-150'
              />
            </SheetTrigger>
            <SheetContent className='sheet-content sm:w-64 glass'>
              <>
                <Logo width={152} height={23} />

                <ul className='header-nav_elements'>
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        className={`p-18 flex whitespace-nowrap transition-all duration-300 ${
                          isActive
                            ? 'text-cyan-400 bg-cyan-900/20 rounded-lg px-3 py-2'
                            : 'text-cyan-300 hover:text-cyan-400 hover:bg-cyan-900/10 rounded-lg px-3 py-2'
                        }`}
                        key={link.route}
                      >
                        <Link className='sidebar-link cursor-pointer' href={link.route}>
                          <Image
                            src={link.icon}
                            alt='logo'
                            width={24}
                            height={24}
                            className={`transition-all duration-300 ${isActive ? 'brightness-150' : 'brightness-100'}`}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className='button cyber-gradient-primary'>
            <Link href='/sign-in'>Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};
export default MobileNav;
