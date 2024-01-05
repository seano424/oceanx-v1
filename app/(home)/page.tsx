import Hero from './components/Hero'
import Video from './components/Video'
import Explore from './components/Explore'
import BringBack from './components/BringBack'
import Carousel from '@/components/Carousel'

export default function Home() {
  return (
    <main>
      <Hero />
      <Video />
      <Explore />
      <BringBack />
      <Carousel />
    </main>
  )
}
