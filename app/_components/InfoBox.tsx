import React from 'react'

function InfoBox({ errorMessage }: { errorMessage?: string }) {
    return (
        <main className="containerBox mt-5 flex flex-col justify-center items-center">
            <div className="list-disc list-inside break-words max-w-[500px] flex flex-col gap-3 ">
                {errorMessage ? <header className='text-center text-red-400 w-full text-[22px]'>{errorMessage.toUpperCase() + ' !'}</header>
                    : <h2 className=" w-full text-[18px]">Search for Zip Code in Above Search Bar : </h2>
                }
                <ul className="list-disc list-inside">
                    <li>Search in Format of ZipCode,
                        <a target="_blank" className="underline text-blue-300" href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes"> ISO 3166 CountryCode</a> (No Space after ZipCode)</li>
                    <li>For Eg for New Delhi Zipcode- 110001  Search for 110001,IN </li>
                    <li>Please Note outside US and other Major Cities the Location name wont be accurate with respect to Zip Code</li>
                </ul>

            </div>
        </main>
    )
}

export default InfoBox
