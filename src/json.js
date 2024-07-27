function reduceAPIAnswer (obj) {
    // function takes object from API-call and returns object with necesarry data
    const result = {}; // Object to be returned 
    console.log(obj);

    // Adds location
    const {resolvedAddress} = obj;
    result.location = resolvedAddress;
    
    // Adds Current conditions
    const {currentConditions : {cloudcover, datetime, temp, precip, humidity, conditions, winddir, windgust, windspeed, sunrise, sunset, uvindex, visibility, icon }} = obj;
    result.current = {cloudcover, datetime, temp, precip, humidity, conditions, winddir, windgust, windspeed, sunrise, sunset, uvindex, visibility, icon};
    const currentHour = parseInt(datetime.slice(0, 2));  // Determines hour for adding hourly forecast
   
    // Adds 5 day forecast 
    const forecast = [];
    const {days} = obj; 
    for (let i = 0; i < 6; i++) {
        const {datetime, tempmin, tempmax, precipprob, cloudcover, winddir, windspeed, icon} = days[i+1];
        forecast[i] = {datetime, tempmin, tempmax, precipprob, cloudcover, winddir, windspeed, icon};
    }
    result.forecast = forecast;

    // Adds 6 hour forecast
    const hourly = [];
    for (let i = 0; i < 6; i++){
        let hour = currentHour + 1 + i;
        if (hour < 24) {
            const {datetime, temp, precipprob, windspeed, winddir, cloudcover, icon} = days[0].hours[hour];
            hourly[i] = {datetime, temp, precipprob, windspeed, winddir, cloudcover, icon};
        }
        if (hour >= 24) {
            hour -= 24;
            const {datetime, temp, precipprob, windspeed, winddir, cloudcover, icon} = days[1].hours[hour];
            hourly[i] = {datetime, temp, precipprob, windspeed, winddir, cloudcover, icon};
        }
    }
    result.hourly = hourly;
    
return result; 
}


export {reduceAPIAnswer};