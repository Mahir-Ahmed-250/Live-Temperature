const API_KEY = `fd27e4ffbc2e9ca4176abebc675343c7`;


const searchTemperature = () => {
    const cityField = document.getElementById('city');
    const cityText = cityField.value;
    cityField.value = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=${API_KEY}&units=metric `;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = (data) => {

    const cityName = document.getElementById('city-name');

    cityName.innerText = (data.name);
    const temperature = document.getElementById('temp');
    temperature.innerText = (data.main.temp);
    const weather = document.getElementById('weather');
    weather.innerText = (data.weather[0].main);

    const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    const weatherIcon = document.getElementById('icon');
    weatherIcon.setAttribute('src', url);
    console.log(data)
}
const searchTemperature1 = (dhaka) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${dhaka}&appid=${API_KEY}&units=metric `;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature1(data))
}
onload = searchTemperature1('dhaka')
const displayTemperature1 = (data) => {
    const cityName = document.getElementById('city-name');
    cityName.innerText = (data.name);
    const temperature = document.getElementById('temp');
    temperature.innerText = (data.main.temp);
    const weather = document.getElementById('weather');
    weather.innerText = (data.weather[0].main)
    const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    const weatherIcon = document.getElementById('icon');
    weatherIcon.setAttribute('src', url);

    console.log(data)
}