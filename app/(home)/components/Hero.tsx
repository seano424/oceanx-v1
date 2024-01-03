import Image from 'next/image'

export default function Hero() {
  return (
    <div className="bg-black relative h-screen w-full">
      <Image
        className="object-top object-cover"
        src="/images/home-page/hero-image.png"
        alt="Homepage Hero Image"
        fill
        quality={100}
      />

      <div className="absolute inset-0 flex flex-col top-60 text-center px-32 gap-5 text-white xl:justify-center xl:top-20">
        <p className="uppercase text-white text-sm tracking-widest font-light">
          A Mission
        </p>
        <h1 className="text-5xl mx-auto lg:max-w-[700px]">
          To explore the ocean and bring it back to the world
        </h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center">
        <p className="uppercase text-white text-sm tracking-widest font-light">
          Dive In
        </p>
        <span className="h-16 w-[1px] bg-white mt-2"></span>
      </div>
    </div>
  )
}
