import Image from 'next/image'
import Link from 'next/link'
import Hero from './components/Hero'
import Video from './components/Video'
import Explore from './components/Explore'
import BringBack from './components/BringBack'

export default function Home() {
  return (
    <main>
      <Hero />
      <Video />
      <Explore />
      <BringBack />
    </main>
  )
}
