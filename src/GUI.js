function importIcons() {
    let r = require.context('./assets', false, /\.svg$/);
    const images = {};
    r.keys().map((item, index) => { 
        images[item.replace('./', '')] = r(item); 
        });
    return images;
}

let icons = {};

function webPage(data) {
    icons = importIcons(); // Imports all Icons from ./assets
    
    // Create all divs
    const body = document.querySelector('body');
    const main = document.querySelector('.main');
    
    const locationContainer = createDiv(main, 'container', 'location');
        createDiv(locationContainer, 'locationData', 'location', data.location.location);

    const hourlyContainer = createDiv(main, 'container', 'hourly');
        const hour = [];
        for (let i = 0; i < 6; i++){
            hour[i] = createDiv(hourlyContainer, 'hour');
                createDiv(hour[i], 'hourData', 'time', data.hourly[i].datetime);
                createIcon(hour[i], 'hourData', 'icon', data.hourly[i].icon);
                createDiv(hour[i], 'hourData', 'temp', data.hourly[i].temp + '°C', 'temp');
                createDiv(hour[i], 'hourData', 'cloud', data.hourly[i].cloudcover + '%', 'cloudcover');
                createDiv(hour[i], 'hourData', 'precip', data.hourly[i].precipprob + '%', 'precip');
                createDiv(hour[i], 'hourData', 'windSpeed', data.hourly[i].windspeed + ' km/u', 'windy');
                createDiv(hour[i], 'hourData', 'windDir', data.hourly[i].winddir + '°');
            }
    const currentContainer = createDiv(main, 'container', 'current');
            createIcon(currentContainer, 'currentData', 'icon', data.current.icon);
            createDiv(currentContainer, 'currentData', 'temp', data.current.temp + '°C','temp');
            createDiv(currentContainer, 'currentData', 'cloud', data.current.cloudcover + '%', 'cloudcover');
            createDiv(currentContainer, 'currentData', 'humidity', data.current.humidity + '%');
            createDiv(currentContainer, 'currentData', 'precip', data.current.precip, 'precip');
            createDiv(currentContainer, 'currentData', 'UV', data.current.uvindex);
            createDiv(currentContainer, 'currentData', 'visibility', data.current.visibility);
            createDiv(currentContainer, 'currentData', 'windSpeed', data.current.windspeed  + ' km/u', 'windy');
            createDiv(currentContainer, 'currentData', 'windDir', data.current.winddir  +  '°');
            createDiv(currentContainer, 'currentData', 'windGust', data.current.windgust  + ' km/u');

    const forecastContainer = createDiv(main, 'container', 'forecast');
            const days = [];
            for (let i = 0; i < 6; i++){
                days[i] = createDiv(forecastContainer, 'days');
                createDiv(days[i], 'forecastData', 'day', data.forecast[i].datetime);
                createIcon(days[i], 'forecastData', 'icon', data.forecast[i].icon);
                createDiv(days[i], 'forecastData', 'tempMax', data.forecast[i].tempmax + '°C','temp');
                createDiv(days[i], 'forecastData', 'tempMin', data.forecast[i].tempmin + '°C', 'temp');
                createDiv(days[i], 'forecastData', 'cloud', data.forecast[i].cloudcover + '%', 'cloudcover');
                createDiv(days[i], 'forecastData', 'precip', data.forecast[i].precipprob + '%', 'precip');
                createDiv(days[i], 'forecastData', 'windSpeed', data.forecast[i].windspeed  + ' km/u', 'windy');
                createDiv(days[i], 'forecastData', 'windDir', data.forecast[i].winddir +  '°');   
            }
    const footer = createDiv(main, 'container', 'footer');
}

function createDiv(parent, class1, class2, text, icon) {
    const newDiv = document.createElement('div');
    if (class1 != undefined) newDiv.classList.add(class1);
    if (class2 != undefined) newDiv.classList.add(class2);
    if (text != undefined) newDiv.textContent = text;
    if (icon != undefined) 
    switch(icon){
        case 'temp': {
            createIcon(newDiv, 'smallIcon', 'dummy', 'temp');
            break;
        }
        case 'precip': {
            createIcon(newDiv, 'smallIcon', 'dummy', 'precip');
            break;
        }
        case 'windy': {
            createIcon(newDiv, 'smallIcon', 'dummy', 'windy')
            break;
        }
        case 'cloudcover': {
            createIcon(newDiv, 'smallIcon', 'dummy', 'cloudcover')
            break;

        }
    }
    parent.appendChild(newDiv);
    return newDiv;
}

function createIcon(parent, class1, class2, iconName){
    const img = new Image;
    img.src = icons[`${iconName}.svg`];
    if (class1 != undefined) img.classList.add(class1);
    if (class2 != undefined) img.classList.add(class2);
    parent.appendChild(img)
    return img;
}


export { webPage }