import Image from 'next/image'
import Link from 'next/link'

export default function Explore() {
  return (
    <div className="min-h-screen w-full bg-black py-40 lg:py-80 relative">
      <Image
        fill
        alt="explore"
        className="object-center"
        src="/images/home-page/explore.svg"
      />
      <div className="lg:w-1/2 min-h-screen flex flex-col lg:justify-center items-center relative">
        <div className="flex flex-col pl-base pr-32 text-white">
          <h2 className="bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text w-max text-7xl font-bold tracking-tight pb-7">
            Explore
          </h2>
          <p className="text-3xl pb-7">
            We access the most unreachable parts of the ocean aboard the most
            advanced exploration and media vessel ever built.
          </p>
          <Link
            className="underline uppercase underline-offset-4  hover:text-blue-500  transition-colors duration-300 ease-in-out w-max"
            href="/"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  )
}
