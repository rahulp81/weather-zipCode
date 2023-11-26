const clearImage = "/Clear.png";
const heavyRainImage = "/HeavyRain.png";
const heavyCloudImage = "/HeavyCloud.png";
const hailImage = "/Hail.png";
const lightCloudImage = "/LightCloud.png";
const lightRainImage = "/LightRain.png";
const showerImage = "/Shower.png";
const sleetImage = "/Sleet.png";
const snowImage = "/Snow.png";
const thunderstormImage = "/Thunderstorm.png";
const hazeImage = "/haze.png";
const fogImage = "/foggy.png";


const img = {
  clear: clearImage,
  heavyRain: heavyRainImage,
  heavyCloud: heavyCloudImage,
  hail: hailImage,
  lightCloud: lightCloudImage,
  lightRain: lightRainImage,
  shower: showerImage,
  sleet: sleetImage,
  snow: snowImage,
  thunderstorm: thunderstormImage,
  haze: hazeImage,
  fog: fogImage,
};

export default function weatherIcon(weather) {

 console.log('weather - ',weather);

  if (weather.main === "Clear") return img.clear;
  if (weather.main === "Thunderstorm") return img.thunderstorm;
  if (
    weather.main === "Drizzle" ||
    weather.description === "light rain" ||
    weather.description === "moderate rain"
  )
    return img.lightRain;
  if (weather.main === "Rain") {
    if (
      weather.description === "heavy intensity rain" ||
      weather.description === "very heavy rain" ||
      weather.description === "extreme rain"
    )
      return img.heavyRain;
    if (
      weather.description === "shower rain" ||
      weather.description === "heavy intensity shower rain" ||
      weather.description === "ragged shower rain"
    )
      return img.shower;
  }
  if (weather.main === "Snow") {
    if (
      weather.description === "sleet" ||
      weather.description === "light shower sleet" ||
      weather.description === "shower sleet" ||
      weather.description === "light rain and snow" ||
      weather.description === "rain and snow"
    )
      return img.sleet;
    else return img.snow;
  }
  if (weather.main === "Clouds") {
    if (
      weather.description === "few clouds" ||
      weather.description === "scattered clouds"
    )
      return img.lightCloud;
    else return img.heavyCloud;
  }

  if (weather.main == "Mist" || weather.main == "Fog") return img.fog;

  return img.haze;
}