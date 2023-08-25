const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '28be4246bamshc3c8ad8a81380d3p115209jsneaeaa0f29d97',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
async function weatherforcast(){

try {
    const getWeather = (city) => {
         cityName.innerHtml = city;
    }
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result)
    varcloud_pct.innerHtml = response.cloud_pct
    temp.innerHtml = response.temp
    temp2.innerHtml = response.temp
    feels_like.innerHtml = response.feels_like
    humidity.innerHtml = response.humidity
    humidity2.innerHtml = response.humidity
    min_temp.innerHtml = response.min_temp
    max_temp.innerHtml = response.max_temp
    wind_speed.innerHtml = response.wind_speed
    wind_speed2.innerHtml = response.wind_speed
    // wind_degrees.innerHtml = response.wind_degrees
    sunrise.innerHtml = response.sunrise
    sunset.innerHtml = response.sunset

} catch (error) {
    console.error(error);
}
}
Submit.addEventListener('click', () => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Gujarat")