import Image from 'next/image'
import Link from 'next/link'

export default function Explore() {
  return (
    <div className="min-h-screen w-full bg-black py-40 lg:py-80 relative">
      <Image
        fill
        alt="explore"
        className="object-center hidden md:block"
        src="/images/home-page/explore.svg"
      />
      <Image
        fill
        alt="explore"
        className="md:hidden "
        src="/images/home-page/explore-sm.svg"
      />

      <div className="lg:w-1/2 min-h-screen flex flex-col lg:justify-center items-center relative mb-80 md:mb-auto">
        <div className="flex flex-col pl-base md:pr-32 text-white">
          <h2 className="h2 bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text w-max pb-7">
            Explore
          </h2>
          <p className="p pb-7">
            We access the most unreachable parts of the ocean aboard the most
            advanced exploration and media vessel ever built.
          </p>
          <Link
            className="underline uppercase underline-offset-8  hover:text-blue-500  transition-colors duration-300 ease-in-out w-max text-sm md:text-base"
            href="/"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  )
}
