import React from 'react'

const Heading = ({ title, Icon }) => {
  return (
    <div className="w-full flex items-center justify-center py-6 lg:py-10">
      <div className="w-fit px-6 sm:px-8 lg:px-10 skill-bg flex justify-center items-center gap-3 backdrop-blur-lg shadow-lg border border-white/20 rounded-xl py-2">
        <h1 className="text-center font-semibold leading-none tracking-tighter text-2xl sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        <Icon
          size={28}
          className="dark:text-white/65 text-black/75 flex-shrink-0"
        />
      </div>
    </div>
  )
}

export default Heading