function refresh() {
    const apiKey = "3fa7cb558fc67ebedad0b21a677dbaf0";
    const lat = "-37.81"
    const lon = "144.96"
    const url = "https://api.openweathermap.org/data/2.5/onecall?lat=-37.86&lon=145.06&appid=3fa7cb558fc67ebedad0b21a677dbaf0&units=metric";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        var currentTemp = `${data.current.temp}`
        var currentMain = `${data.current.weather[0].main}`
        var currentLow = `${data.daily[0].temp.min}`
        var currentHigh = `${data.daily[0].temp.max}`
        var currentIcon = `${data.current.weather[0].icon}`;
        document.querySelector("body > div > h2").innerHTML = Math.round(currentTemp);
        document.querySelector("body > div > h2").innerHTML += "&deg";
        document.querySelector("body > div > h3").innerHTML = currentMain;
        document.querySelector("body > div > h3.highLow > span.high").innerHTML = "H:"
        document.querySelector("body > div > h3.highLow > span.high").innerHTML += Math.round(currentHigh);
        document.querySelector("body > div > h3.highLow > span.high").innerHTML += "&deg;&nbsp;&nbsp;&nbsp;"
        document.querySelector("body > div > h3.highLow > span.low").innerHTML = "L:"
        document.querySelector("body > div > h3.highLow > span.low").innerHTML += Math.round(currentLow);
        document.querySelector("body > div > h3.highLow > span.low").innerHTML += "&deg;";
        document.querySelector("body > div.current > img").src = `http://openweathermap.org/img/wn/${currentIcon}@2x.png`

        document.querySelector("body > div.mainMenu").innerHTML = `
        <button class="toggle" onclick="toWeekly()">Switch To Daily</button>
        <h4 class="switch">Hourly Forecast</h4>
        <div class="scrollable">
            <div class="block n1"></div>
            <div class="block n2"></div>
            <div class="block n3"></div>
            <div class="block n4"></div>
            <div class="block n5"></div>
            <div class="block n6"></div>
            <div class="block n7"></div>
            <div class="block n8"></div>
            <div class="block n9"></div>
            <div class="block n10"></div>
            <div class="block n11"></div>
            <div class="block n12"></div>
            <div class="block n13"></div>
            <div class="block n14"></div>
            <div class="block n15"></div>
            <div class="block n16"></div>
            <div class="block n17"></div>
            <div class="block n18"></div>
            <div class="block n19"></div>
            <div class="block n20"></div>
            <div class="block n21"></div>
            <div class="block n22"></div>
            <div class="block n23"></div>
            <div class="block n24"></div>
            <div class="block n25"></div>
        </div>
    `;

        var currentHour = "12 AM";

        const d = new Date();
        var hour = d.getHours();

        var specNew = parseInt(hour)
        if (specNew == 0) {
            currentHour = "12 AM"
        } else if (specNew < 12) {
            currentHour = `${specNew} AM`
        } else if (specNew == 12) {
            currentHour = "12 PM"
        } else {
            specNew = specNew - 12;
            currentHour = `${specNew} PM`
        }
        var hour0icon = `${data.hourly[0].weather[0].icon}`
        var hour0temp = Math.round(`${data.hourly[0].temp}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n1").innerHTML = `
            <h5 class="time">${currentHour}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${hour0icon}.png" alt="">
            <h5 class="temp">${hour0temp}&deg;</h5>
        `

        test = parseInt(hour)
        if (test == 23) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentHour = "12 AM"
        } else if (specNew < 12) {
            currentHour = `${specNew} AM`
        } else if (specNew == 12) {
            currentHour = "12 PM"
        } else {
            specNew = specNew - 12;
            currentHour = `${specNew} PM`
        }
        var hour1icon = `${data.hourly[1].weather[0].icon}`
        var hour1temp = Math.round(`${data.hourly[1].temp}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n2").innerHTML = `
            <h5 class="time">${currentHour}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${hour1icon}.png" alt="">
            <h5 class="temp">${hour1temp}&deg;</h5>
        `

        if (test == 23) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentHour = "12 AM"
        } else if (specNew < 12) {
            currentHour = `${specNew} AM`
        } else if (specNew == 12) {
            currentHour = "12 PM"
        } else {
            specNew = specNew - 12;
            currentHour = `${specNew} PM`
        }
        var hour2icon = `${data.hourly[2].weather[0].icon}`
        var hour2temp = Math.round(`${data.hourly[2].temp}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n3").innerHTML = `
            <h5 class="time">${currentHour}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${hour2icon}.png" alt="">
            <h5 class="temp">${hour2temp}&deg;</h5>
        `

        if (test == 23) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentHour = "12 AM"
        } else if (specNew < 12) {
            currentHour = `${specNew} AM`
        } else if (specNew == 12) {
            currentHour = "12 PM"
        } else {
            specNew = specNew - 12;
            currentHour = `${specNew} PM`
        }
        var hour3icon = `${data.hourly[3].weather[0].icon}`
        var hour3temp = Math.round(`${data.hourly[3].temp}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n4").innerHTML = `
            <h5 class="time">${currentHour}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${hour3icon}.png" alt="">
            <h5 class="temp">${hour3temp}&deg;</h5>
        `

        if (test == 23) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentHour = "12 AM"
        } else if (specNew < 12) {
            currentHour = `${specNew} AM`
        } else if (specNew == 12) {
            currentHour = "12 PM"
        } else {
            specNew = specNew - 12;
            currentHour = `${specNew} PM`
        }
        var hour4icon = `${data.hourly[4].weather[0].icon}`
        var hour4temp = Math.round(`${data.hourly[4].temp}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n5").innerHTML = `
            <h5 class="time">${currentHour}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${hour4icon}.png" alt="">
            <h5 class="temp">${hour4temp}&deg;</h5>
        `

        if (test == 23) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentHour = "12 AM"
        } else if (specNew < 12) {
            currentHour = `${specNew} AM`
        } else if (specNew == 12) {
            currentHour = "12 PM"
        } else {
            specNew = specNew - 12;
            currentHour = `${specNew} PM`
        }
        var hour5icon = `${data.hourly[5].weather[0].icon}`
        var hour5temp = Math.round(`${data.hourly[5].temp}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n6").innerHTML = `
            <h5 class="time">${currentHour}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${hour5icon}.png" alt="">
            <h5 class="temp">${hour5temp}&deg;</h5>
        `

        if (test == 23) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentHour = "12 AM"
        } else if (specNew < 12) {
            currentHour = `${specNew} AM`
        } else if (specNew == 12) {
            currentHour = "12 PM"
        } else {
            specNew = specNew - 12;
            currentHour = `${specNew} PM`
        }
        var hour6icon = `${data.hourly[6].weather[0].icon}`
        var hour6temp = Math.round(`${data.hourly[6].temp}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n7").innerHTML = `
            <h5 class="time">${currentHour}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${hour6icon}.png" alt="">
            <h5 class="temp">${hour6temp}&deg;</h5>
        `

        if (test == 23) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentHour = "12 AM"
        } else if (specNew < 12) {
            currentHour = `${specNew} AM`
        } else if (specNew == 12) {
            currentHour = "12 PM"
        } else {
            specNew = specNew - 12;
            currentHour = `${specNew} PM`
        }
        var hour7icon = `${data.hourly[7].weather[0].icon}`
        var hour7temp = Math.round(`${data.hourly[7].temp}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n8").innerHTML = `
            <h5 class="time">${currentHour}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${hour7icon}.png" alt="">
            <h5 class="temp">${hour7temp}&deg;</h5>
        `

        if (test == 23) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentHour = "12 AM"
        } else if (specNew < 12) {
            currentHour = `${specNew} AM`
        } else if (specNew == 12) {
            currentHour = "12 PM"
        } else {
            specNew = specNew - 12;
            currentHour = `${specNew} PM`
        }
        var hour8icon = `${data.hourly[8].weather[0].icon}`
        var hour8temp = Math.round(`${data.hourly[8].temp}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n9").innerHTML = `
            <h5 class="time">${currentHour}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${hour8icon}.png" alt="">
            <h5 class="temp">${hour8temp}&deg;</h5>
        `

        if (test == 23) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentHour = "12 AM"
        } else if (specNew < 12) {
            currentHour = `${specNew} AM`
        } else if (specNew == 12) {
            currentHour = "12 PM"
        } else {
            specNew = specNew - 12;
            currentHour = `${specNew} PM`
        }
        var hour9icon = `${data.hourly[9].weather[0].icon}`
        var hour9temp = Math.round(`${data.hourly[9].temp}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n10").innerHTML = `
            <h5 class="time">${currentHour}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${hour9icon}.png" alt="">
            <h5 class="temp">${hour9temp}&deg;</h5>
        `
        if (test == 23) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentHour = "12 AM"
        } else if (specNew < 12) {
            currentHour = `${specNew} AM`
        } else if (specNew == 12) {
            currentHour = "12 PM"
        } else {
            specNew = specNew - 12;
            currentHour = `${specNew} PM`
        }
        var hour10icon = `${data.hourly[10].weather[0].icon}`
        var hour10temp = Math.round(`${data.hourly[10].temp}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n11").innerHTML = `
            <h5 class="time">${currentHour}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${hour10icon}.png" alt="">
            <h5 class="temp">${hour10temp}&deg;</h5>
        `
    });
};

function toWeekly() {
    const url = "https://api.openweathermap.org/data/2.5/onecall?lat=-37.86&lon=145.06&appid=3fa7cb558fc67ebedad0b21a677dbaf0&units=metric";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.querySelector("body > div.mainMenu").innerHTML = `
        <button class="toggle" onclick="refresh()">Switch to Hourly</button>
        <h4 class="switch">Daily Forecast</h4>
        <div class="scrollable">
            <div class="block n1"></div>
            <div class="block n2"></div>
            <div class="block n3"></div>
            <div class="block n4"></div>
            <div class="block n5"></div>
            <div class="block n6"></div>
            <div class="block n7"></div>
            <div class="block n8"></div>
            <div class="block n9"></div>
            <div class="block n10"></div>
            <div class="block n11"></div>
            <div class="block n12"></div>
            <div class="block n13"></div>
            <div class="block n14"></div>
            <div class="block n15"></div>
            <div class="block n16"></div>
            <div class="block n17"></div>
            <div class="block n18"></div>
            <div class="block n19"></div>
            <div class="block n20"></div>
            <div class="block n21"></div>
            <div class="block n22"></div>
            <div class="block n23"></div>
            <div class="block n24"></div>
            <div class="block n25"></div>
        </div>
    `;
        var currentDay = "now";

        const d = new Date();
        var day = d.getDay();

        var specNew = parseInt(day)
        if (specNew == 0) {
            currentDay = "SUN"
        } else if (specNew == 1) {
            currentDay = "MON"
        } else if (specNew == 2) {
            currentDay = "TUE"
        } 
        else if (specNew == 3) {
            currentDay = "WED"
        }else if (specNew == 4) {
            currentDay = "THU"
        }else if (specNew == 5) {
            currentDay = "FRI"
        }else {
            currentDay = "SAT"
        }
        var day0icon = `${data.daily[0].weather[0].icon}`
        var day0temp = Math.round(`${data.daily[0].temp.day}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n1").innerHTML = `
            <h5 class="time">${currentDay}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${day0icon}.png" alt="">
            <h5 class="temp">${day0temp}&deg;</h5>
        `

        test = parseInt(day)
        if (test == 6) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentDay = "SUN"
        } else if (specNew == 1) {
            currentDay = "MON"
        } else if (specNew == 2) {
            currentDay = "TUE"
        } 
        else if (specNew == 3) {
            currentDay = "WED"
        }else if (specNew == 4) {
            currentDay = "THU"
        }else if (specNew == 5) {
            currentDay = "FRI"
        }else {
            currentDay = "SAT"
        }
        var day1icon = `${data.daily[1].weather[0].icon}`
        var day1temp = Math.round(`${data.daily[1].temp.day}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n2").innerHTML = `
            <h5 class="time">${currentDay}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${day1icon}.png" alt="">
            <h5 class="temp">${day1temp}&deg;</h5>
        `

        if (test == 6) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentDay = "SUN"
        } else if (specNew == 1) {
            currentDay = "MON"
        } else if (specNew == 2) {
            currentDay = "TUE"
        } 
        else if (specNew == 3) {
            currentDay = "WED"
        }else if (specNew == 4) {
            currentDay = "THU"
        }else if (specNew == 5) {
            currentDay = "FRI"
        }else {
            currentDay = "SAT"
        }
        var day2icon = `${data.daily[2].weather[0].icon}`
        var day2temp = Math.round(`${data.daily[2].temp.day}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n3").innerHTML = `
            <h5 class="time">${currentDay}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${day2icon}.png" alt="">
            <h5 class="temp">${day2temp}&deg;</h5>
        `

        if (test == 6) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentDay = "SUN"
        } else if (specNew == 1) {
            currentDay = "MON"
        } else if (specNew == 2) {
            currentDay = "TUE"
        } 
        else if (specNew == 3) {
            currentDay = "WED"
        }else if (specNew == 4) {
            currentDay = "THU"
        }else if (specNew == 5) {
            currentDay = "FRI"
        }else {
            currentDay = "SAT"
        }
        var day3icon = `${data.daily[3].weather[0].icon}`
        var day3temp = Math.round(`${data.daily[3].temp.day}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n4").innerHTML = `
            <h5 class="time">${currentDay}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${day3icon}.png" alt="">
            <h5 class="temp">${day3temp}&deg;</h5>
        `

        if (test == 6) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentDay = "SUN"
        } else if (specNew == 1) {
            currentDay = "MON"
        } else if (specNew == 2) {
            currentDay = "TUE"
        } 
        else if (specNew == 3) {
            currentDay = "WED"
        }else if (specNew == 4) {
            currentDay = "THU"
        }else if (specNew == 5) {
            currentDay = "FRI"
        }else {
            currentDay = "SAT"
        }
        var day4icon = `${data.daily[4].weather[0].icon}`
        var day4temp = Math.round(`${data.daily[4].temp.day}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n5").innerHTML = `
            <h5 class="time">${currentDay}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${day4icon}.png" alt="">
            <h5 class="temp">${day4temp}&deg;</h5>
        `

        if (test == 6) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentDay = "SUN"
        } else if (specNew == 1) {
            currentDay = "MON"
        } else if (specNew == 2) {
            currentDay = "TUE"
        } 
        else if (specNew == 3) {
            currentDay = "WED"
        }else if (specNew == 4) {
            currentDay = "THU"
        }else if (specNew == 5) {
            currentDay = "FRI"
        }else {
            currentDay = "SAT"
        }
        var day5icon = `${data.daily[5].weather[0].icon}`
        var day5temp = Math.round(`${data.daily[5].temp.day}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n6").innerHTML = `
            <h5 class="time">${currentDay}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${day5icon}.png" alt="">
            <h5 class="temp">${day5temp}&deg;</h5>
        `

        if (test == 6) {
            test = 0
            specNew = 0
        } else {
            test = test + 1
            specNew = test
        }
        if (specNew == 0) {
            currentDay = "SUN"
        } else if (specNew == 1) {
            currentDay = "MON"
        } else if (specNew == 2) {
            currentDay = "TUE"
        } 
        else if (specNew == 3) {
            currentDay = "WED"
        }else if (specNew == 4) {
            currentDay = "THU"
        }else if (specNew == 5) {
            currentDay = "FRI"
        }else {
            currentDay = "SAT"
        }
        var day6icon = `${data.daily[6].weather[0].icon}`
        var day6temp = Math.round(`${data.daily[6].temp.day}`);
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n7").innerHTML = `
            <h5 class="time">${currentDay}</h5>
            <img class="icon" src="http://openweathermap.org/img/wn/${day6icon}.png" alt="">
            <h5 class="temp">${day6temp}&deg;</h5>
        `

        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n8").innerHTML = null;
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n9").innerHTML = null;
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n10").innerHTML = null;
        document.querySelector("body > div.mainMenu > div.scrollable > div.block.n11").innerHTML = null;
    });
}