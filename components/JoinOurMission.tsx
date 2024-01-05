import Link from 'next/link'
import Image from 'next/image'
import TextColumn from './TextColumn'

const missionLinks = [
  {
    title: 'Become a Partner',
    href: '/',
  },
  {
    title: 'Explore Careers',
    href: '/',
  },
]

export default function JoinOurMission() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative pb-[450px] lg:pb-[1600px]">
      <div className="z-40 relative h-80">
        <TextColumn
          text="Join Our Mission"
          height="medium"
        />
      </div>

      <div className="mx-base relative z-40 pt-20">
        <div className="border-t border-white">
          {missionLinks.map((link) => (
            <div
              key={link.title}
              className="border-b border-white py-10"
            >
              <Link
                href={link.href}
                className="text-7xl font-semibold hover:text-bg transition-all duration-200 ease-in-out"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Image
        fill
        className="object-contain object-bottom "
        src="/images/home-page/join-our-mission.webp"
        alt="Join our mission"
      />
    </div>
  )
}
