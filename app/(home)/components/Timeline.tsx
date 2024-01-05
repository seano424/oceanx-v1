import TimelineItem from './TimelineItem'

const timelineItems = {
  heading: 'Making History',
  subheading:
    'OceanX’s achievements have redefined what’s possible in ocean exploration and storytelling.',
  items: [
    {
      year: '2019',
      description:
        'OceanXplorer is launched, a 286-foot vessel that can travel to the farthest corners of the planet.',
      image: '/images/timeline/2019.webp',
      link: '/projects/2019',
      label: 'watch',
      sideBySide: true,
    },
    {
      year: '2017',
      description:
        'OceanXplorer embarks on its first expedition to the Seychelles, where it discovers a new species of coral.',
      image: '/images/timeline/2017.webp',
      link: '/projects/2017',
      label: 'view missions',
      sideBySide: false,
    },
    {
      year: '2012',
      description:
        'OceanXplorer travels to the Galápagos Islands, where it discovers a new species of shark.',
      image: '/images/timeline/2012.webp',
      link: '/projects/2012',
      label: 'see it',
      sideBySide: true,
    },
  ],
}

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

      <div className="grid grid-cols-12 pr-20">
        {timelineItems.items.map((items, index) => (
          <TimelineItem
            key={index}
            {...items}
          />
        ))}
      </div>
    </div>
  )
}
