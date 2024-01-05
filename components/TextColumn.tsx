import React from 'react'

interface TextColumnProps {
  text?: string
}

export default function TextColumn({text = 'Dive in'}: TextColumnProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center">
      <p className="uppercase text-white text-xs tracking-[0.3em] font-light">
        {text}
      </p>
      <span className="h-20 w-[1px] bg-white mt-2"></span>
    </div>
  )
}
