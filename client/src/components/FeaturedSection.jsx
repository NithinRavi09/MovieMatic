import { ArrowRight } from 'lucide-react'
import React from 'react'

const FeaturedSection = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
      
      <div>
        <p>Now Showing</p>
        <button>View All <ArrowRight className='group-hover:translate-x-0.5 transition w-4.5 h-4.5' /></button>
      </div>
      
      <div></div>
      
      <div></div>
    </div>
  )
}

export default FeaturedSection
