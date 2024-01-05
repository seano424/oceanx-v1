import clsx from 'clsx'

export const ButtonGroup = ({
  next,
  previous,
  ...rest
}: {
  next?: () => void
  previous?: () => void
  carouselState?: {
    currentSlide: number
    totalItems: number
  }
}) => {
  const {
    carouselState: {currentSlide, totalItems} = {
      currentSlide: 0,
      totalItems: 0,
    },
  } = rest
  return (
    <div className="absolute left-0 right-0 bottom-0">
      <div className="flex items-center gap-2 pb-6">
        <button
          onClick={previous}
          disabled={currentSlide === 0}
          className={clsx(currentSlide === 0 ? 'disable' : '', 'text-white')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={clsx(
              'w-12 h-12',
              currentSlide === 0 ? 'text-gray-500' : 'text-white'
            )}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <span className="text-white text-xs tracking-widest font-mono">
          {currentSlide + 1}/{totalItems}
        </span>

        <button
          className="text-white"
          onClick={next}
          disabled={totalItems === currentSlide + 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={clsx(
              'w-12 h-12',
              totalItems === currentSlide + 1 ? 'text-gray-500' : 'text-white'
            )}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <div className="bg-gray-700 h-[2px] bottom-0 w-11/12 left-0 right-0 absolute flex">
        <div
          className={clsx(
            'transition-transform duration-500 ease-in-out w-1/3 bg-blue-700 h-[2px]',
            currentSlide === 0 && 'translate-x-0',
            currentSlide === 1 && 'translate-x-[100%]',
            currentSlide === 2 && 'translate-x-[200%]'
          )}
        ></div>
      </div>
    </div>
  )
}
