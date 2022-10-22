import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Footer, Header } from '../components'
import format from 'date-fns/format'

const Search = () => {
    const router = useRouter()
    const {location, endDate, startDate, numOfGuest} = router.query
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const ahmet = `${formattedStartDate}- ${formattedEndDate}`
    return (
        <div>
            <Header placeholder={`${location} | ${ahmet} | ${numOfGuest} guests`}/>
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays  {ahmet}  for {numOfGuest} number of guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                    <div className='hidden lg:inline-flex mb-5 whitespace-nowrap text-gray-800 space-x-3'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More filters</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
)
}

export default Search