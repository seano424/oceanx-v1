import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="min-h-screen relative bg-black py-16 px-base text-white">
      {/* bg image */}
      <Image
        fill
        src="/images/footer/footer-bg.webp"
        alt="footer-bg"
        className="object-contain object-top lg:object-cover relative z-0"
      />

      <div className="relative z-40">
        {/* content */}
        <p className="uppercase text-xs pb-8">connect</p>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-12 border-b pb-12 border-white">
          <div className="col-span-7">
            <p className="p text-white">
              Be first to hear about our missions, science, discoveries, and
              more.
            </p>
          </div>

          <div className="md:pl-10 col-span-5 flex items-start">
            <input className="w-full bg-white border-none p-2 rounded-l h-12" />
            <button className="bg-blue-500 text-white px-5 rounded-r h-12">
              Subscribe
            </button>
          </div>
        </div>

        <p className="uppercase text-xs pt-12 pb-8">EXPLORE</p>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-12 border-b pb-12 border-white">
          <div className="col-span-7">
            <p className="p text-white">Follow OceanX on social.</p>
          </div>

          <div className="md:pl-10 col-span-5 flex gap-4 items-start">
            <Link
              className="h-10 w-10 bg-blue-200 rounded"
              href="/"
            ></Link>
            <Link
              className="h-10 w-10 bg-blue-200 rounded"
              href="/"
            ></Link>
            <Link
              className="h-10 w-10 bg-blue-200 rounded"
              href="/"
            ></Link>
            <Link
              className="h-10 w-10 bg-blue-200 rounded"
              href="/"
            ></Link>
            <Link
              className="h-10 w-10 bg-blue-200 rounded"
              href="/"
            ></Link>
            <Link
              className="h-10 w-10 bg-blue-200 rounded"
              href="/"
            ></Link>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:grid md:grid-cols-12 py-12">
          <div className="col-span-7">
            <p className="text-white text-xs pr-10">
              Our vision is to create a deeply engaged global community of
              explorers, scientists, and storytellers dedicated to educating,
              inspiring, and protecting the oceans in order to drive positive
              change. Please contact us if you are interested in licensing the
              use of our audiovisual or photographic content relating to the
              oceans and marine life. OceanX is a nonprofit initiative of the
              Dalio Philanthropies (www.daliophilanthropies.org) bringing
              science to life through captivating storytelling.
            </p>
          </div>

          <div className="md:pl-10 col-span-5 flex flex-col gap-5 items-start">
            <Link
              className="uppercase"
              href="/"
            >
              Our DNA
            </Link>
            <Link
              className="uppercase"
              href="/"
            >
              Our Partnerships
            </Link>
            <Link
              className="uppercase"
              href="/"
            >
              Become a partner
            </Link>
            <Link
              className="uppercase"
              href="/"
            >
              Our people
            </Link>
            <Link
              className="uppercase"
              href="/"
            >
              join our team
            </Link>
          </div>
        </div>

        <div className="pt-20 flex">
          <Link
            className="w-28"
            href="/"
          >
            OCEANX
          </Link>
          <div className="flex flex-col gap-3 text-xs font-light uppercase">
            <span>&#169; Oceanx</span>
            <div className="flex gap-3">
              <Link href="/">Terms and conditions</Link>
              <span>|</span>
              <Link href="/">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
