'use client'

import Link from 'next/link'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'

import {ButtonGroup} from '../ButtonGroup'
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
    <div className="min-h-screen flex flex-col justify-center bg-black pl-20 lg:pl-52">
      <span className="uppercase underline text-white underline-offset-4 text-xs pb-12">
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
            className="grid grid-cols-12 h-[700px]"
          >
            <div className="col-span-5 flex flex-col gap-10 text-white">
              <h3 className="text-2xl">{item.title}</h3>
              <Link
                className="uppercase border w-max border-white rounded px-10 py-3 text-xs"
                href={item.link.href}
              >
                {item.link.label}
              </Link>
            </div>
            <div className="col-span-7 relative">
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
