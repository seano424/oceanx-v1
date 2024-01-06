'use client'

import {motion} from 'framer-motion'
import {useMobileMenuStore} from '@/store/useMobileMenuStore'

export default function Hamburger() {
  const isOpen = useMobileMenuStore((state) => state.isOpen)
  const toggleOpen = useMobileMenuStore((state) => state.toggle)

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
    <button
      onClick={() => toggleOpen()}
      className="absolute right-0 -top-[5px] lg:hidden"
    >
      <div className="h-5 w-5">
        <svg viewBox="0 0 25 25">
          <motion.path
            variants={path01Variants}
            animate={isOpen ? 'open' : 'closed'}
            transition={{duration: 0.3}}
            fill="transparent"
            strokeWidth="3"
            stroke="#010101"
            strokeLinecap="round"
          ></motion.path>
          <motion.path
            variants={path02Variants}
            animate={isOpen ? 'open' : 'closed'}
            transition={{duration: 0.2}}
            fill="transparent"
            strokeWidth="3"
            stroke="#010101"
            strokeLinecap="round"
          ></motion.path>
          <motion.path
            variants={path03Variants}
            animate={isOpen ? 'open' : 'closed'}
            transition={{duration: 0.3}}
            fill="transparent"
            strokeWidth="3"
            stroke="#010101"
            strokeLinecap="round"
          ></motion.path>
        </svg>
      </div>
    </button>
  )
}
