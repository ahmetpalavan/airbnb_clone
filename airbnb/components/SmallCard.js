import React from 'react'
import Image from 'next/image'

const SmallCard = ({img,location,distance}) => {
    return (
        <div>
            {/* Left */}
            <div className='relative h-16 w-16'>
                <Image
                src={img} layout='fill'
                />
            </div>
        </div>
    )
}

export default SmallCard