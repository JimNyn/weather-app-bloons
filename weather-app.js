const apiKey="8822ec5abc3b310133c566a6179f4c3a";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
const apiUrl2="https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(desitnation=75085){
    if(desitnation>0){
        const response = await fetch(apiUrl2 +desitnation+",us"+`&appid=${apiKey}`);
        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }else{
            var data = await response.json();
    
            document.querySelector(".destination").innerHTML = data.name;
            
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " mp/h";
    
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds-WizardMonkey.png"
                document.querySelector(".weather-Status").innerHTML = "Cloudy"
    
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear-SuperMonkey.png"
                document.querySelector(".weather-Status").innerHTML = "Clear"
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain-NinjaMonkey.png"
                document.querySelector(".weather-Status").innerHTML = "Rainy"
    
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle-SniperMonkey.png"
                document.querySelector(".weather-Status").innerHTML = "Drizzling"
    
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist-AscendedShadow.png"
                document.querySelector(".weather-Status").innerHTML = "Misty"
            }
            
    
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    }else{
        const response = await fetch(apiUrl +desitnation+",us"+`&appid=${apiKey}`);
        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }else{
            var data = await response.json();
    
            document.querySelector(".destination").innerHTML = data.name;
            
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " mp/h";
    
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds-WizardMonkey.png"
                document.querySelector(".weather-Status").innerHTML = "Cloudy"
    
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear-SuperMonkey.png"
                document.querySelector(".weather-Status").innerHTML = "Clear"
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain-NinjaMonkey.png"
                document.querySelector(".weather-Status").innerHTML = "Rainy"
    
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle-SniperMonkey.png"
                document.querySelector(".weather-Status").innerHTML = "Drizzling"
    
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist-AscendedShadow.png"
                document.querySelector(".weather-Status").innerHTML = "Misty"
            }
            
    
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    }
    
}

let userInput = document.getElementById("input")
let btn = document.getElementById("btn")

userInput.addEventListener("keyup", e =>{
    e.preventDefault();
    if(e.keyCode === 13){
        console.log("Enter is pressed");
        btn.click();
    }
})

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();