let a = 7;
console.log("hello",a)
const apiKey = "586461230df55d17b756e5fc17ce7b5a";

const inp  = document.querySelector("input"); 
const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    console.log("button clicked")
    console.log(inp.value)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=${apiKey}`;
    checkWeather(apiUrl);
    console.log("data get");
})


    async function checkWeather(apiUrl){
        const data = await fetch(apiUrl);
        const result = await data.json()
        console.log(result);

        document.querySelector(".city").innerHTML = result.name;
        document.querySelector(".temp").innerHTML =(result.main.feels_like-272.15).toFixed(2) + "°C";
        document.querySelector(".humidity").innerHTML = result.main.humidity + "%" ;
        document.querySelector(".wind").innerHTML = result.wind.speed + "km/h";


    }
