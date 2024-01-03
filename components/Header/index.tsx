import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from '../MobileMenu/Menu'
import Hamburger from '../MobileMenu/Hamburger'
import {desktopNavItems} from '@/libs/navItems'

export default function Header() {
  return (
    <nav className="flex p-8 items-center text-xs xl:text-sm text-black fixed h-[56px] w-full bg-white z-50">
      {/* First 3 Navigation Items */}
      <div className="w-1/3 lg:flex gap-7 hidden">
        {desktopNavItems.slice(0, 3).map((item) => (
          <Link
            key={item.label}
            className="hover:text-blue-500"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Logo and Hamburger */}
      <div className="flex-1 relative justify-center">
        <Link
          className="hover:text-blue-500 flex w-max mx-auto justify-center"
          href={'/'}
        >
          <Image
            className="hidden lg:block"
            priority
            src="/images/header/oceanx_logo_dark.svg"
            alt="OceanXplorer"
            width={200}
            height={200}
          />

          <Image
            className="lg:hidden"
            priority
            src="/images/header/oceanx_logo_dark.svg"
            alt="OceanXplorer"
            width={100}
            height={100}
          />
        </Link>

        <Hamburger />
      </div>

      {/* Last 3 Navigation Items */}
      <div className="w-1/3 hidden lg:flex gap-7 justify-end">
        {desktopNavItems.slice(3).map((item) => {
          return item.sublinks ? (
            <div
              key={item.label}
              className="group relative"
            >
              <Link
                href={item.href}
                className="hover:text-blue-500"
              >
                {item.label}
              </Link>
              <div
                key={item.label}
                className="absolute -left-4 w-48 shadow-xl border rounded pt-4 pb-2 gap-2 px-4 bg-white border-gray-50 flex flex-col group-hover:opacity-100 group-focus-within:opacity-100 opacity-0 transition-opacity duration-200 ease-linear"
              >
                {item.sublinks.map((sublink) => (
                  <Link
                    key={sublink.label}
                    className="border-t py-2 hover:text-blue-500"
                    href={sublink.href}
                  >
                    {sublink.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
            >
              {item.label}
            </Link>
          )
        })}
      </div>

      <MobileMenu />
    </nav>
  )
}
