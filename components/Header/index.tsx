'use client'

import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {motion, AnimatePresence} from 'framer-motion'

const desktopNavItems = [
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

const mobileNavItems = [
  {href: '/', label: 'Home'},
  {
    href: '/',
    label: 'About',
    sublinks: [
      {href: '/', label: 'Our DNA'},
      {href: '/', label: 'Our People'},
      {href: '/', label: 'Our Partnerships'},
    ],
  },
  {href: '/', label: 'Press Room'},
  {href: '/', label: 'Science'},
  {href: '/', label: 'Projects'},
  {href: '/', label: 'OceanXplorer'},
  {href: '/', label: 'Deep Sea Vehicles'},
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const path01Variants = {
    closed: {d: 'M 3 3 L 19 3'},
    open: {d: 'M 3 3 L 23 22'},
  }

  const path02Variants = {
    closed: {d: 'M 3 12.5 L 23 12.5', opacity: 1},
    open: {d: 'M 3 12.5 L 23 12.5', opacity: 0},
  }

  const path03Variants = {
    closed: {d: 'M 3 22 L 16 22'},
    open: {d: 'M 3 22 L 23 3'},
  }

  return (
    <nav className="flex py-5 px-7 items-center text-xs xl:text-sm text-black fixed h-[56px] w-full bg-white z-50">
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
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute right-0 top-0 lg:hidden"
        >
          <div className="h-4 w-4">
            <svg viewBox="0 0 25 25">
              <motion.path
                variants={path01Variants}
                animate={isMenuOpen ? 'open' : 'closed'}
                transition={{duration: 0.3}}
                fill="transparent"
                strokeWidth="3"
                stroke="#010101"
                strokeLinecap="round"
              ></motion.path>
              <motion.path
                variants={path02Variants}
                animate={isMenuOpen ? 'open' : 'closed'}
                transition={{duration: 0.2}}
                fill="transparent"
                strokeWidth="3"
                stroke="#010101"
                strokeLinecap="round"
              ></motion.path>
              <motion.path
                variants={path03Variants}
                animate={isMenuOpen ? 'open' : 'closed'}
                transition={{duration: 0.3}}
                fill="transparent"
                strokeWidth="3"
                stroke="#010101"
                strokeLinecap="round"
              ></motion.path>
            </svg>
          </div>
        </button>
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
                className="absolute -left-4 w-48 shadow-xl border rounded pt-4 gap-2 px-4 bg-white border-gray-50 flex flex-col group-hover:opacity-100 group-focus-within:opacity-100 opacity-0 transition-opacity duration-200 ease-linear"
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
      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="absolute overflow-scroll top-[56px] bg-white inset-0  h-screen flex flex-col px-8 lg:hidden"
          >
            {mobileNavItems.map((item) => {
              return item.sublinks ? (
                <div
                  className="flex flex-col"
                  key={item.label}
                >
                  <Link
                    href={item.href}
                    className="text-4xl border-t border-black py-5"
                  >
                    <span className="bg-gradient-to-r from-blue-800 to-black text-transparent bg-clip-text w-max">
                      {item.label}
                    </span>
                  </Link>
                  {item.sublinks.map((sublink) => (
                    <Link
                      key={sublink.label}
                      className="pl-5 pb-5 text-2xl"
                      href={sublink.href}
                    >
                      <span className="bg-gradient-to-r from-blue-800 to-black text-transparent bg-clip-text w-max">
                        {sublink.label}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  className="text-4xl border-t border-black py-5 "
                  key={item.label}
                  href={item.href}
                >
                  <span className="bg-gradient-to-r from-blue-800 to-black text-transparent bg-clip-text w-max">
                    {item.label}
                  </span>
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
