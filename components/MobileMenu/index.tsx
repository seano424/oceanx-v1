'use client'

import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'
import {useMobileMenuStore} from '@/store/useMobileMenuStore'
import {mobileNavItems} from '@/libs/navItems'

export default function MobileMenu() {
  const isOpen = useMobileMenuStore((state) => state.isOpen)

  return (
    <AnimatePresence>
      {isOpen && (
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
  )
}
