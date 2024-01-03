'use client'
import ReactPlayer from 'react-player'
import {useState, useEffect} from 'react'

export default function Video() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="w-full relative min-h-screen">
      {isClient && (
        <ReactPlayer
          width={'100%'}
          height={'1000px'}
          controls
          url="https://www.youtube.com/watch?v=j9P1qzQyGq0"
        />
      )}
    </div>
  )
}
