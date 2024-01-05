'use client'

import Link from 'next/link'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'

import ButtonGroup from './ButtonGroup'
import {carouselItems} from '@/libs/carouselItems'

const responsive = {
  superLargeDesktop: {
    breakpoint: {max: 4000, min: 3000},
    items: 1,
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 1,
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 1,
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
  },
}

export default function CustomCarousel() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-black pl-base">
      <span className="uppercase border-b tracking-widest pb-2 text-white text-xs mb-12 w-max">
        Mission updates
      </span>
      <Carousel
        itemClass="image-item"
        className="relative"
        showDots={false}
        responsive={responsive}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5s"
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        transitionDuration={500}
      >
        {carouselItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-col-reverse md:grid grid-cols-12 md:h-[400px] lg:h-[700px] pb-28"
          >
            <div className="col-span-5 flex flex-col gap-5 md:gap-10 text-white">
              <h3 className="text-xl md:text-2xl pr-10">{item.title}</h3>
              <Link
                className="uppercase border w-max border-white rounded px-10 py-3 text-xs"
                href={item.link.href}
              >
                {item.link.label}
              </Link>
            </div>
            <div className="h-[400px] md:h-auto col-span-7 relative">
              <Image
                fill
                className="object-center object-cover pb-20"
                src={item.image}
                alt="see inside oceanxplorer"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
