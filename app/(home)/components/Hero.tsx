import TextColumn from '@/components/TextColumn'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="bg-black relative h-screen w-full">
      <Image
        fill
        className="hidden md:block object-top object-cover"
        src="/images/home-page/hero-image.png"
        alt="Homepage Hero Image"
        quality={100}
      />

      <Image
        fill
        className="md:hidden object-top object-cover"
        src="/images/home-page/hero-image-sm.jpeg"
        alt="Homepage Hero Image"
        quality={100}
      />

      <div className="absolute inset-0 flex flex-col justify-center  text-center md:justify-normal top-60 px-32 gap-5 text-white xl:justify-center xl:top-20">
        <p className="uppercase text-white/90 text-xs md:text-sm tracking-widest">
          A Mission
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl mx-auto md:max-w-[500px] lg:max-w-[700px]">
          To explore the ocean and bring it back to the world
        </h1>
      </div>

      <TextColumn />
    </div>
  )
}
