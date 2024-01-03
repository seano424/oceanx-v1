import Image from 'next/image'
import Link from 'next/link'

export default function BringBack() {
  return (
    <div className="min-h-screen bg-black relative flex flex-col">
      <div className="grid lg:grid-cols-2 relative top-32 z-10">
        <div className="flex flex-col col-start-2 text-white px-32">
          <h2 className="bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text w-max text-7xl tracking-tight pb-7 font-bold">
            Bring Back
          </h2>
          <p className="text-3xl pb-7">
            We inspire change by bringing the ocean's never-before-seen wonders
            back to dry land.
          </p>
          <Link
            className="underline uppercase underline-offset-4 hover:text-blue-500  transition-colors duration-300 ease-in-out w-max"
            href="/"
          >
            Learn more
          </Link>
        </div>
      </div>

      <div className="h-[1000px] w-full bg-yellow-50 relative">
        <Image
          fill
          className="object-cover"
          src="/images/home-page/subs.jpeg"
          alt="sub image"
        />
      </div>
    </div>
  )
}
