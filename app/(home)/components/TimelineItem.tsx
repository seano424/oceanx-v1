'use client'

import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import {useRef} from 'react'
import {useInView} from 'framer-motion'

interface TimelineItemProps {
  year: string
  description: string
  image: string
  link: string
  label: string
  sideBySide: boolean
}

export default function TimelineItem({
  year,
  description,
  image,
  link,
  label,
  sideBySide,
}: TimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {amount: 0.5})

  return (
    <>
      {/* timeline line */}
      <div
        ref={ref}
        className="col-span-1 h-full w-[1px] bg-white relative"
      >
        <div className="bg-white rounded-full h-3 w-3 absolute -left-[6px]"></div>
        <div
          className={clsx(
            'border-white border h-5 w-5 absolute -left-[10px] -top-[4px] rounded-full',
            isInView && 'animate-scale-pulse'
          )}
        ></div>
      </div>

      {/* timeline items */}
      <div
        className={clsx(
          'col-span-11 flex flex-col pb-28',
          sideBySide && 'md:flex-row'
        )}
      >
        <div
          className={clsx(
            'pb-16 leading-loose',
            sideBySide && 'pr-10 lg:pr-20 min-w-64 lg:min-w-[400px]'
          )}
        >
          <span className="text-xs lg:text-sm font-mono tracking-widest">
            {year}
          </span>
          <h5 className="text-2xl lg:text-4xl tracking-wides pt-3 pb-8">
            {description}
          </h5>
          <Link
            className="uppercase underline underline-offset-8 pb-12 text-xs lg:text-sm"
            href={link}
          >
            {label}
          </Link>
        </div>
        <div
          className={clsx(
            'h-[400px] lg:h-[600px] flex-shrink-0 w-full relative'
          )}
        >
          <Image
            fill
            src={image}
            alt="2019"
            className={clsx('object-cover', !sideBySide && 'md:hidden')}
          />

          {!sideBySide && (
            <>
              <Image
                height={700}
                width={700}
                src={image}
                alt="2019"
                className="object-cover hidden lg:block"
              />

              <Image
                height={400}
                width={400}
                src={image}
                alt="2019"
                className="object-cover hidden md:block lg:hidden"
              />
            </>
          )}
        </div>
      </div>
    </>
  )
}