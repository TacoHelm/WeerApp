function importIcons() {
    let r = require.context('./assets', false, /\.svg$/);
    const images = {};
    r.keys().map((item, index) => { 
        images[item.replace('./', '')] = r(item); 
        });
    return images;
}

let icons = {};

// Object with definition of website

const webSite = {
        location:{
            class: 'container',
            location: ['location.location'],
        },
        current:{
            class: 'container',
            icon: 'current.icon',
            temp: {
                class: 'item',
                key: 'Temp',
                data:['current.temp', '°C'],
            },
            cloudcover: {
                class: 'item',
                key: 'Clouds',
                data:['current.cloudcover', '%'],
            },
            precip: {
                class: 'item',
                key: 'Rain',
                data:['current.precip'],
            },
            wind: {
                class: 'item',
                key: 'Wind',
                data:['current.windspeed', '@',  'current.winddir', '°'],

            }
        },
        forecast: {
            class: 'container',
            day0: {
                class: 'hour',
                icon: 'forecast[0].icon',
                date: {
                    class: 'item',
                    key: 'Date',
                    data: ['forecast[0].datetime'],
                },
                Tmax: {
                    class: 'item',
                    key: 'Tmax',
                    data: ['forecast[0].tempmax', '°C'],
                },
                Tmin: {
                    class: 'item',
                    key: 'Tmin',
                    data: ['forecast[0].tempmin', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['forecast[0].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['forecast[0].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['forecast[0].windspeed', '@',  'forecast[0].winddir', '°'],
                }
            },
            day1: {
                class: 'hour',
                icon: 'forecast[1].icon',
                date: {
                    class: 'item',
                    key: 'Date',
                    data: ['forecast[1].datetime'],
                },
                Tmax: {
                    class: 'item',
                    key: 'Tmax',
                    data: ['forecast[1].tempmax', '°C'],
                },
                Tmin: {
                    class: 'item',
                    key: 'Tmin',
                    data: ['forecast[1].tempmin', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['forecast[1].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['forecast[1].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['forecast[1].windspeed', '@',  'forecast[1].winddir', '°'],
                }
            },
            day2: {
                class: 'hour',
                icon: 'forecast[2].icon',
                date: {
                    class: 'item',
                    key: 'Date',
                    data: ['forecast[2].datetime'],
                },
                Tmax: {
                    class: 'item',
                    key: 'Tmax',
                    data: ['forecast[2].tempmax', '°C'],
                },
                Tmin: {
                    class: 'item',
                    key: 'Tmin',
                    data: ['forecast[2].tempmin', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['forecast[2].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['forecast[2].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['forecast[2].windspeed', '@',  'forecast[2].winddir', '°'],
                }
            },
            day3: {
                class: 'hour',
                icon: 'forecast[3].icon',
                date: {
                    class: 'item',
                    key: 'Date',
                    data: ['forecast[3].datetime'],
                },
                Tmax: {
                    class: 'item',
                    key: 'Tmax',
                    data: ['forecast[3].tempmax', '°C'],
                },
                Tmin: {
                    class: 'item',
                    key: 'Tmin',
                    data: ['forecast[3].tempmin', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['forecast[3].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['forecast[3].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['forecast[3].windspeed', '@',  'forecast[3].winddir', '°'],
                }
            },
            day4: {
                class: 'hour',
                icon: 'forecast[4].icon',
                date: {
                    class: 'item',
                    key: 'Date',
                    data: ['forecast[4].datetime'],
                },
                Tmax: {
                    class: 'item',
                    key: 'Tmax',
                    data: ['forecast[4].tempmax', '°C'],
                },
                Tmin: {
                    class: 'item',
                    key: 'Tmin',
                    data: ['forecast[4].tempmin', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['forecast[4].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['forecast[4].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['forecast[4].windspeed', '@',  'forecast[4].winddir', '°'],
                }
            },
            day5: {
                class: 'hour',
                icon: 'forecast[5].icon',
                date: {
                    class: 'item',
                    key: 'Date',
                    data: ['forecast[5].datetime'],
                },
                Tmax: {
                    class: 'item',
                    key: 'Tmax',
                    data: ['forecast[5].tempmax', '°C'],
                },
                Tmin: {
                    class: 'item',
                    key: 'Tmin',
                    data: ['forecast[5].tempmin', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['forecast[5].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['forecast[5].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['forecast[5].windspeed', '@',  'forecast[5].winddir', '°'],
                }
            },
        },
        hourly: {
            class: 'container',
            hour0: {
                class: 'hour',
                icon: 'hourly[0].icon',
                date: {
                    class: 'item',
                    key: 'Time',
                    data: ['hourly[0].datetime'],
                },
                Temp: {
                    class: 'item',
                    key: 'Temp',
                    data: ['hourly[0].temp', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['hourly[0].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['hourly[0].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['hourly[0].windspeed', '@',  'hourly[0].winddir', '°'],
                }, 
            },
            hour1: {
                class: 'hour',
                icon: 'hourly[1].icon',
                date: {
                    class: 'item',
                    key: 'Time',
                    data: ['hourly[1].datetime'],
                },
                Temp: {
                    class: 'item',
                    key: 'Temp',
                    data: ['hourly[1].temp', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['hourly[1].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['hourly[1].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['hourly[1].windspeed', '@',  'hourly[1].winddir', '°'],
                }, 
            },
            hour2: {
                class: 'hour',
                icon: 'hourly[2].icon',
                date: {
                    class: 'item',
                    key: 'Time',
                    data: ['hourly[2].datetime'],
                },
                Temp: {
                    class: 'item',
                    key: 'Temp',
                    data: ['hourly[2].temp', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['hourly[2].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['hourly[2].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['hourly[2].windspeed', '@',  'hourly[2].winddir', '°'],
                }, 
            },
            hour3: {
                class: 'hour',
                icon: 'hourly[3].icon',
                date: {
                    class: 'item',
                    key: 'Time',
                    data: ['hourly[3].datetime'],
                },
                Temp: {
                    class: 'item',
                    key: 'Temp',
                    data: ['hourly[3].temp', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['hourly[3].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['hourly[3].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['hourly[3].windspeed', '@',  'hourly[4].winddir', '°'],
                }, 
            },
            hour4: {
                class: 'hour',
                icon: 'hourly[4].icon',
                date: {
                    class: 'item',
                    key: 'Time',
                    data: ['hourly[4].datetime'],
                },
                Temp: {
                    class: 'item',
                    key: 'Temp',
                    data: ['hourly[4].temp', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['hourly[4].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['hourly[4].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['hourly[4].windspeed', '@',  'hourly[4].winddir', '°'],
                }, 
            },
            hour5: {
                class: 'hour',
                icon: 'hourly[5].icon',
                date: {
                    class: 'item',
                    key: 'Time',
                    data: ['hourly[5].datetime'],
                },
                Temp: {
                    class: 'item',
                    key: 'Temp',
                    data: ['hourly[5].temp', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['hourly[5].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['hourly[5].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['hourly[5].windspeed', '@',  'hourly[5].winddir', '°'],
                }, 
            },
            
        },
        footer: {

        }, 
};
 
/*
createDiv(hour[i], 'hourData', 'time', data.hourly[i].datetime);
                createIcon(hour[i], 'hourData', 'icon', data.hourly[i].icon);
                createDiv(hour[i], 'hourData', 'temp', data.hourly[i].temp + '°C', 'temp');
                createDiv(hour[i], 'hourData', 'cloud', data.hourly[i].cloudcover + '%', 'cloudcover');
                createDiv(hour[i], 'hourData', 'precip', data.hourly[i].precipprob + '%', 'precip');
                createDiv(hour[i], 'hourData', 'windSpeed', data.hourly[i].windspeed + ' km/u', 'windy');
                createDiv(hour[i], 'hourData', 'windDir', data.hourly[i].winddir + '°');
*/

//const parent = [];                          // Array of parent names
let weatherData = {};


function createWebSite(data) {
    icons = importIcons();            // Object with all references to all icons
    const main = document.querySelector('.main');    
    weatherData = data;
    iterateObject(webSite, main);   
}


function iterateObject(obj, parentElement) {               // iterates trough webSite-object and makes an array of objects with dependency information               
    Object.keys(obj).forEach(key => {      
        //let ID = '' 
        //parent.push(key); 
        //parent.forEach(element => ID += element); 

        if (obj[key].constructor === Object) {        
                const newDiv = document.createElement('div');
                //newDiv.setAttribute('id', ID);
                newDiv.classList.add(key);
                parentElement.appendChild(newDiv);      
            iterateObject(obj[key], newDiv);  
        }
        
        if (key === 'class') parentElement.classList.add(obj[key]);

        if (key === 'icon') createIcon(obj[key], parentElement);

        if (key === 'key') createKey(obj[key], parentElement);
                
        if (key === 'data') createValue(obj[key], parentElement);


        //parent.pop();        
    });
}

function createValue(arr, parentElement){
    const newElement = document.createElement('p');
    parentElement.appendChild(newElement);
    let text = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('.')) eval(`text += weatherData.${arr[i]}`); 
        if (arr[i].includes('.') == false) text += arr[i];          
        }
    newElement.textContent = text;
    }

function createIcon(icon, parentElement){
    const newElement = document.createElement('img');
    let iconName = '';
    eval(`iconName = weatherData.${icon}`);
    newElement.src = icons[`${iconName}.svg`];
    parentElement.appendChild(newElement);
}

function createKey(key, parentElement){
    const newElement = document.createElement('p');
    newElement.textContent = key;
    parentElement.appendChild(newElement);
}

export { createWebSite };


