import React from 'react'

export const NewsLetter = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white'>
      <div className='flex flex-col items-center justify-center text-center space-y-2 py-32'>
        <h1 className='md:text-4xl text-2xl font-semibold'>
          Never Miss A Blog!
        </h1>
        <p className='md:text-lg text-gray-500/70 dark:text-gray-300 pb-8'>
          Subscribe to get the latest blogs, new tech, and exclusive news.
        </p>

        <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
          <input
            className='border border-gray-300 dark:border-gray-600 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500 dark:text-white dark:bg-gray-800'
            type='text'
            placeholder='Enter Your Email Id'
            required
          />

          <button className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none'>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}
