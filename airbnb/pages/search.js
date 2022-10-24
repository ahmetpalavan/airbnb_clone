import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Footer, Header, InfoCard } from '../components'
import moment from 'moment'

const Search = (props) => {
    const searchResults = props.searchResults
    const router = useRouter()
    const {location, endDate, startDate, numOfGuest} = router.query
    const formattedStartDate = moment(startDate).format("DD MMM YYYY")
    const formattedEndDate = moment(endDate).format("DD MMM YYYY")
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

                    <div className='flex flex-col'>
                    {searchResults.map(({img, location,title,description,star,price,total})=>(
                        <InfoCard key={img}
                        img={img} location={location} title={title} description={description}
                        star={star} price={price} total={total}
                        />
                    ))}
                    </div>
                </section>
                <section className='hidden xl:inline-flex xl:min-w-[600px] cursor-pointer'>
                    <Map searchResults={searchResults} />
                </section>
            </main>
            <Footer/>
        </div>
)
}

export default Search

import fsPromises from 'fs/promises';
import path from 'path'
import Map from '../components/Map'
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const ahmet = JSON.parse(jsonData);
    return {
        props: ahmet
    }
}
