import InfoBox from '@/app/_components/InfoBox';
import getWeather from '@/app/_lib/getCurrentWeather';
import React from 'react';
import convertDate from '@/app/_lib/covertDate';
import WeatherCard from '@/app/_components/WeatherCard';

async function page({ params }: { params: { zip: string } }) {
    const [zip, CountryCode] = decodeURIComponent(params.zip).split(',');
    const res = await getWeather(zip.trim(), CountryCode && CountryCode.trim());
    if (res.cod == 404) {
        return (
            <InfoBox errorMessage={res.message} />
        )
    }

    let lastDate: string;

    const uniqueDates = res.list.map((data: any) => data.dt_txt.split(' ')[0]);

    // Using a Set to get unique dates
    const uniqueDatesSet: Set<string> = new Set(uniqueDates);
    const uniqueDays: string[] = Array.from(uniqueDatesSet)

    const groupedData = uniqueDays.map((date: string) => ({
        date,
        data: res.list.filter((data: any) => data.dt_txt.split(' ')[0] === date),
    }));

    return (
        <main className='containerBox mt-5 flex flex-col gap-10 pb-6'>
            <header className='flex justify-center gap-2 text-[25px] border border-opacity-75 border-indigo-900 rounded-md max-w-fit mx-auto px-3 p-2 '>
                Zip : <img src="/pin-alt.svg" height={20} width={20} alt="City" />
                <span className='underline'>{res.city.name},{res.city.country}</span>
            </header>
            {groupedData.map((weatherData) =>
                <section key={weatherData.date} className='flex flex-col gap-2'>
                    <h3 className='text-[22px]  font-semibold font-mono'>{convertDate(weatherData.date)} :</h3>
                    <ul className='flex flex-wrap gap-5'>
                        {
                            weatherData.data.map((weatherInfo: any) => <WeatherCard key={weatherInfo.dt_txt} weatherData={weatherInfo} />)
                        }
                    </ul>
                </section>)}
        </main>
    )
}

export default page
