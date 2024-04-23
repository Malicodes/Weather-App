async function getCurrent(data){

    let  response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a82f56f72ec8495594a193009240804&q=${data}&days=3`)
    let finaldata = await response.json()
    displayCurrent(finaldata.location , finaldata.current)
    displayForecast(finaldata.forecast.forecastday[1])
    displayForecast2(finaldata.forecast.forecastday[2])
}


// main Function combined with search  
document.querySelector("#Search").addEventListener("input", function(e){
    getCurrent(e.target.value);
    
})

    getCurrent("Alexandria")

    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    
    function displayCurrent(location, current) {
        
        var currentDate = new Date();
        var dayOfWeek = weekDays[currentDate.getDay()];
        console.log(current.humidity    )
        if (null != current) {

            var cartona = `
            <div class="header d-flex justify-content-between align-items-center">
                <p class="p-2">${dayOfWeek}</p>
                <p class="p-2">${location.localtime}</p>
            </div>
            <div class="today px-3">
                <h2 class="fs-4 py-1">${location.name}</h2>
                <div class="d-flex justify-content-between align-items-center">
                <h3>${current.temp_c}<sup>o</sup>C</h3>
                <span><img src="${current.condition.icon}" alt=""></span>
                </div>
                <div></div>
                <p class="py-2">${current.condition.text}</p>
                <span class="mx-2 "><img src="./images/icon-umberella.png" alt=""> ${current.cloud}%</span>
                <span class="mx-2"><img src="./images/icon-wind.png" alt=""> ${current.wind_kph}km/h</span>
                <span class="mx-2"><img src="./images/icon-compass.png" alt=""> ${current.wind_dir}</span>
            </div>`;
        
            document.querySelector("#Current").innerHTML=cartona

        }
        
    }
    

function displayForecast(noOfDay) {
        
        let cartona = `
            <div class="forecast">
                <div class="header d-flex justify-content-center align-items-center">
                    <p class="p-2">${noOfDay.date}</p>
                </div>
                <div class="forecast-content px-3 d-flex justify-content-center align-items-center flex-column">
                    <span class="py-3"><img src="${noOfDay.day.condition.icon}" alt=""></span>
                    <h3 class="py-2">${noOfDay.day.maxtemp_c} <sup>o</sup>C</h3>
                    <h5 class="py-2">${noOfDay.day.mintemp_c} <sup>o</sup>C</h5>
                    <p class="py-2">${noOfDay.day.condition.text}</p>
                </div>
            </div>`;
    

        document.getElementById("forcast").innerHTML = cartona;
}

// Forecast Day No 2
function displayForecast2(noOfDay2) {
        let cartona = `
            <div class="forecast">
                <div class="header d-flex justify-content-center align-items-center">
                    <p class="p-2">${noOfDay2.date}</p>
                </div>
                <div class="forecast-content px-3 d-flex justify-content-center align-items-center flex-column">
                    <span class="py-3"><img src="${noOfDay2.day.condition.icon}" alt=""></span>
                    <h3 class="py-2">${noOfDay2.day.maxtemp_c} <sup>o</sup>C</h3>
                    <h5 class="py-2">${noOfDay2.day.mintemp_c} <sup>o</sup>C</h5>
                    <p class="py-2">${noOfDay2.day.condition.text}</p>
                </div>
            </div>`;
    

        document.getElementById("thirdDay").innerHTML = cartona;
    }
    
    
    
    