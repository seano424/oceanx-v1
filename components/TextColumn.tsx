import clsx from 'clsx'
import {TextColumnProps} from '@/types/textColumnProps'

export default function TextColumn({
  text = 'Dive in',
  height = 'short',
}: TextColumnProps) {
  return (
    <div
      className={clsx(
        'absolute bottom-0 left-0 right-0 flex flex-col items-center'
      )}
    >
      <p className="uppercase text-white text-xs tracking-[0.3em] font-light">
        {text}
      </p>
      <span
        className={clsx(
          'h-20 w-[1px] bg-white mt-2',
          height === 'short' && 'h-20',
          height === 'medium' && 'h-32',
          height === 'long' && 'h-40'
        )}
      ></span>
    </div>
  )
}
