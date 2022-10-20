import React from 'react'
import Image from 'next/image'

const SmallCard = ({img,location,distance}) => {
    return (
        <div className='flex items-center m-2 mt-5 cursor-pointer hover:bg-gray-100 hover:scale-105 
        space-x-4 rounded-xl transition transform duration-200 ease-out'>
            {/* Left */}
            <div className='relative h-16 w-16'>
                <Image
                src={img} layout='fill' className='rounded-lg'
                />
            </div>
            <div>
                <h2>{location}</h2>
                <h3 className='text-gray-500'>{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard