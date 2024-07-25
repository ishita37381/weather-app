const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('search-button');
const weatherImg=document.querySelector('.weather-image');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const windSpeed=document.getElementById('wind-speed');
const location_not_found=document.querySelector('.location-not-found');
const weather_body=document.querySelector('.weather-body');

 async function checkWeather(city){
    const api_key="3b58120e067fea67e55f6c9f002aaba8";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data= await fetch(`${url}`).then(response=>response.json());
     console.log(weather_data);
     if(weather_data.cod==='404'){
        location_not_found.style.display="flex";
        weather_body.style.display="none";
   //     console.log('error')
        return;
     }
     location_not_found.style.display="none";
     weather_body.style.display="flex";
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    windSpeed.innerHTML=`${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weatherImg.src="/images/cloud.png";
            break;
        case 'Clear':
            weatherImg.src="/images/clear.png";
            break;
        case 'Mist':
            weatherImg.src="/images/mist.png";
            break;
        case 'Rain':
            weatherImg.src="/images/rain.png";
            break;
        case 'Snow':
            weatherImg.src="/images/snow.png";
            break;
    }

    
}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})
