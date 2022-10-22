import React, { useState } from 'react'
import Image from 'next/image'
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import {UserCircleIcon, Bars3Icon, GlobeAltIcon} from '@heroicons/react/24/outline'
import {UsersIcon} from '@heroicons/react/24/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router'

function Header({placeholder}) {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numOfGuest, setNumOfGuest] = useState(1)
    const router = useRouter()
    const search = () => {
        router.push({
            pathname:'/search',
            query:{
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numOfGuest
            }
        })
    }
    function handleSelect  (ranges) {
        setStartDate(ranges.ahmet?.startDate)
        setEndDate(ranges.ahmet?.endDate)
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:'ahmet'
    }
    const resetInput = () => {
        setSearchInput("")
    }
    return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 '>
        {/* Left */}
        <div onClick={()=>router.push("/")} className='flex relative items-center h-10 cursor-pointer my-auto'>
            <Image src="https://links.papareact.com/qd3"
            layout='fill' objectFit='contain' objectPosition='left'
            />
        </div>

        {/* Middle - Search */}
        <div className='items-center flex md:border-2 py-2 rounded-full md:shadow-sm'>
            <input
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            className='pl-6 bg-transparent outline-none flex-grow text-sm placeholder-gray-400 text-gray-600' 
            type='text' 
            placeholder={placeholder || 'Start your search'}/>
            <MagnifyingGlassIcon className='h-8 md:mx-2 hidden md:inline-flex bg-red-400 text-white rounded-full cursor-pointer hover:bg-green-300 p-2'/>
        </div>

        {/* Right */}
        <div className=' flex items-center space-x-4 justify-end text-gray-500 '>
            <p className='hidden md:inline cursor-pointer'>Become a host</p>
            <GlobeAltIcon className='h-6 cursor-pointer'/>
            <div className='flex items-center border-2 p-2 rounded-full space-x-2'>
                <Bars3Icon className='h-6'/>
                <UserCircleIcon className='h-6'/>
            </div>
        </div>
        {searchInput && (
            <div className='flex flex-col col-span-3 mx-auto'>
                <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={['#FD5B61']}
                onChange={handleSelect}
                />
                <div className='flex items-center border-b mb-4'>
                    <h2 className='text-2xl font-semibold flex-grow'>Number of Guests</h2>
                    <UsersIcon className='h-5'/>
                    <input 
                    value={numOfGuest}
                    onChange={(k)=>setNumOfGuest(k.target.value)}
                    min={1}
                    type="number" 
                    className='w-12 pl-2 text-lg outline-none text-red-400'/>
                </div>

                {/* Emmet for React */}
                <div className='flex'>
                    <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                    <button onClick={search} className='flex-grow text-red-400'>Search</button>
                </div>
            </div>
        )}
    </header>
)
}

export default Header