function importIcons() {
    let r = require.context('./assets', false, /\.svg$/);
    const images = {};
    r.keys().map((item, index) => { 
        images[item.replace('./', '')] = r(item); 
        });
    return images;
}

//replace(/-/g, '').

let icons = {};

function webPage(data) {
    icons = importIcons(); // Imports all Icons from ./assets
    console.log(data);
    
    // Create all divs
    const body = document.querySelector('body');
    const main = createDiv(body, 'main');
    const locationContainer = createDiv(main, 'container', 'location');
        createDiv(locationContainer, 'locationData', 'location', data.location);
    const hourlyContainer = createDiv(main, 'container', 'hourly');
        const hour = [];
        for (let i = 0; i < 6; i++){
            hour[i] = createDiv(hourlyContainer, 'hour');
                createDiv(hour[i], 'hourData', 'hourTime', data.hourly[i].datetime);
                createIcon(hour[i], 'hourData', 'hourIcon', data.hourly[i].icon);
                createDiv(hour[i], 'hourData', 'hourTemp', data.hourly[i].temp+'C');
                createDiv(hour[i], 'hourData', 'hourCloud', data.hourly[i].cloudcover);
                createDiv(hour[i], 'hourData', 'hourPrecip', data.hourly[i].precipprob);
                createDiv(hour[i], 'hourData', 'hourWindSpeed', data.hourly[i].windspeed);
                createDiv(hour[i], 'hourData', 'hourWindDir', data.hourly[i].winddir);
            }
    const currentContainer = createDiv(main, 'container', 'current');
            createIcon(currentContainer, 'currentData', 'currentIcon', data.current.icon);
            createDiv(currentContainer, 'currentData', 'currentTemp', data.current.temp);
            createDiv(currentContainer, 'currentData', 'currentCloud', data.current.cloudcover);
            createDiv(currentContainer, 'currentData', 'currentHumidity', data.current.humidity);
            createDiv(currentContainer, 'currentData', 'currentPrecip', data.current.precip);
            createDiv(currentContainer, 'currentData', 'currentUV', data.current.uvindex);
            createDiv(currentContainer, 'currentData', 'currentVisibility', data.current.visibility);
            createDiv(currentContainer, 'currentData', 'currentWindDir', data.current.winddir);
            createDiv(currentContainer, 'currentData', 'currentWindSpeed', data.current.windspeed);
            createDiv(currentContainer, 'currentData', 'currentWindGust', data.current.windgust);

    const forecastContainer = createDiv(main, 'container', 'forecast');
            const days = [];
            for (let i = 0; i < 6; i++){
                days[i] = createDiv(forecastContainer, 'days');
                createDiv(days[i], 'forecastData', 'forecastDay', data.forecast[i].datetime);
                createIcon(days[i], 'forecastData', 'forecastIcon', data.forecast[i].icon);
                createDiv(days[i], 'forecastData', 'forecastTempMax', data.forecast[i].tempmax);
                createDiv(days[i], 'forecastData', 'forecasTempMin', data.forecast[i].tempmin);
                createDiv(days[i], 'forecastData', 'forecastCloud', data.forecast[i].cloudcover);
                createDiv(days[i], 'forecastData', 'forecastPrecip', data.forecast[i].precipprob);
                createDiv(days[i], 'forecastData', 'forecastWindDir', data.forecast[i].winddir);
                createDiv(days[i], 'forecastData', 'forecastWindSpeed', data.forecast[i].windspeed);
            }
}

function createDiv(parent, class1, class2, text) {
    const newDiv = document.createElement('div');
    if (class1 != undefined) newDiv.classList.add(class1);
    if (class2 != undefined) newDiv.classList.add(class2);
    if (text != undefined) newDiv.textContent = text;
    parent.appendChild(newDiv);
    return newDiv;
}

function createIcon(parent, class1, class2, iconName){
    const img = new Image;
    img.src = icons[`${iconName}.svg`];
    console.log(iconName);
    if (class1 != undefined) img.classList.add(class1);
    if (class2 != undefined) img.classList.add(class2);
    parent.appendChild(img)
    return img;
}

export { webPage }