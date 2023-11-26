"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'

function NavBar() {
    const [zipSearch, setZipSearch] = useState('')
    const router = useRouter()

    // route to dynamic '/weather/[zip]' page
    function handleZipSearch() {
        console.log(zipSearch)
        router.push(`/weather/${zipSearch}`)
    }

    function  handleInputChange(e : React.ChangeEvent<HTMLInputElement>){
        // Remove spaces from the input value
        // const newValue = e.target.value.replace(/\s/g, '');
        setZipSearch(e.currentTarget.value);
      };


    return (
        <nav className='py-4 px-1 flex flex-col justify-center items-center gap-5 containerBox'>
            <Link href={'/'}><header className='text-3xl font-semibold'>WeatherAPP</header></Link>
            <div className='flex gap-4 flex-wrap justify-center'>
                <input placeholder='Eg.ZIPCODE,CountryCode'
                value={zipSearch} onChange={handleInputChange}
                    className='bg-inherit text-white border outline-none px-2 py-1 rounded' type="text" />
                <button disabled={zipSearch.length < 1} className={`${zipSearch.length < 1 ? 'bg-blue-950 cursor-not-allowed' : 'bg-blue-500'} px-3 py-1 rounded-lg`}
                    onClick={handleZipSearch} >
                    Get Weather
                </button>
            </div>
        </nav>
    )
}

export default NavBar
