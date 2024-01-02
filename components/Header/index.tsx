import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  {href: '/', label: 'OceanXplorer'},
  {href: '/', label: 'Deep Sea Vehicles'},
  {href: '/', label: 'Science'},
  {
    href: '/',
    label: 'About',
    sublinks: [
      {href: '/', label: 'Our DNA'},
      {href: '/', label: 'Our People'},
      {href: '/', label: 'Our Partnerships'},
    ],
  },
  {href: '/', label: 'Projects'},
  {href: '/', label: 'Press Room'},
]

export default function Header() {
  return (
    <nav className="flex py-5 px-8 items-center text-xs xl:text-sm">
      <div className="w-1/3 lg:flex gap-10 hidden">
        {navItems.slice(0, 3).map((item) => (
          <Link
            key={item.label}
            className="hover:text-blue-500"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Link
        className="flex-1 flex justify-center hover:text-blue-500"
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
      <div className="w-1/3 hidden lg:flex gap-10 justify-end">
        {navItems.slice(3).map((item) => {
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
                className="absolute -left-4 w-48 shadow-xl border rounded pt-4 gap-2 px-4 border-gray-50 flex flex-col group-hover:opacity-100 group-focus-within:opacity-100 opacity-0 transition-opacity duration-200 ease-linear"
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
            <Link href={item.href}>{item.label}</Link>
          )
        })}
      </div>
    </nav>
  )
}
