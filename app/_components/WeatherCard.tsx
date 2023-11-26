import React from 'react'
import weatherIcon from '../_lib/weatherIconPicker'
import _ from 'lodash'

export default function WeatherCard({ weatherData }: { weatherData: any }) {
    return (
        <div className='flex px-3 gap-4 flex-wrap border rounded-md border-indigo-500 p-2'>
            {/* {weatherIcon(weatherData.weather[0])}
            {weatherData.dt_txt} */}

            <div className="bg-[#1e213a] p-2 rounded flex flex-col font-[500]   gap-2 items-center bg-primary-100 text-accent-100 grow basis-0  max-w-[180px] min-w-[150px] ">
                <h4>Time : {weatherData.dt_txt.split(' ')[1]}</h4>
                <img
                    className="max-h-[65px] max-w-[85px]  translate-x-[-10px]"
                    src={weatherIcon(weatherData.weather[0])}
                    alt=""
                />
                <div>{_.startCase(weatherData.weather[0].description)}</div>
            </div>

            <div className='flex flex-col gap-1.5 font-mono'>
                <h4 className='text-[18px]'>Forecast</h4>
                <ul className='flex flex-col gap-1 list-disc list-inside'>
                    <li>Temperature : {weatherData.main.temp}°C</li>
                    <li>Humidty : {weatherData.main.humidity}%</li>
                </ul>

            </div>
        </div>
    )
}
