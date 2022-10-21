import React from 'react'

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='text-xs text-gray-800 space-y-4'> 
                <h5 className='font-bold'>ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className='text-xs text-gray-800 space-y-4'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its a pretty awesome clone</p>
                <p>Referrals accepted</p>
                <p>Palavan</p>
            </div>

            <div className='text-xs text-gray-800 space-y-4'>
                <h5 className='font-bold'>HOST</h5>
                <p>Ahmet React</p>
                <p>Presents</p>
                <p>Zero to Full Stack Hero</p>
                <p>Hundreds of Students</p>
                <p>Join Now</p>
            </div>

            <div className='text-xs text-gray-800 space-y-4'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p>Help Centre</p>
                <p>Trust & Safety</p>
                <p>Say Hi Youtube</p>
                <p>Easter Eggs</p>
                <p>For the Win</p>
            </div>
            <div></div>
        </div>
)
}

export default Footer