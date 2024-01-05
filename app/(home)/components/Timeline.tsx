import TimelineItem from './TimelineItem'
import {timelineItems} from '@/libs/timelineItems'

export default function Timeline() {
  return (
    <div className="min-h-screen bg-black text-white pl-base">
      <div className="pt-44 pb-56 pl-28 max-w-[900px]">
        <h2 className="text-bg h2">Making History</h2>
        <p className="p">
          OceanX's achievements have redefined what’s possible in ocean
          exploration and storytelling.
        </p>
      </div>

      <div className="grid grid-cols-12 pr-20 md:pr-0">
        {timelineItems.items.map((items, index) => (
          <TimelineItem
            key={index}
            {...items}
            lastItem={index === timelineItems.items.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
