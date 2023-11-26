// async function getCoOrdinates(zip : string, countryCode : string | null = null){
// const apiUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}${countryCode ? ',' + countryCode : '' }&appid=${process.env.API_KEY}`
// const res : any = await fetch(apiUrl);
// }


export default async function getWeather(zip : string, countryCode : string | null = null){
    const baseUrl = `http://api.openweathermap.org/data/2.5/forecast?zip=${zip}${countryCode ? `,${countryCode}` : '' }&appid=${process.env.API_KEY}&units=metric`;;
    const res  = await fetch(baseUrl);
    const data = await res.json();
    return data;
}