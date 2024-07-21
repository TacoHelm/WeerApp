function reduceAPIAnswer (obj) {
    // function takes object from API-call and returns object with necesarry data
    const result = {}; // Object to be returned 
    
    // Adds Current conditions
    const {currentConditions : {cloudcover, datetime, temp, precip, humidity, conditions, winddir, windgust, windspeed, sunrise, sunset, uvindex, visibility }} = obj;
    result.current = {cloudcover, datetime, temp, precip, humidity, conditions, winddir, windgust, windspeed, sunrise, sunset, uvindex, visibility};
    const currentHour = parseInt(datetime.slice(0, 2));  // Determines hour for adding hourly forecast
    console.log(currentHour);
   
    // Adds 5 day forecast 
    const forecast = [];
    const {days} = obj; 
    for (let i = 0; i < 6; i++) {
        const {datetime, tempmin, tempmax, precipprob, cloudcover, winddir, windspeed} = days[i+1];
        forecast[i] = {datetime, tempmin, tempmax, precipprob, cloudcover, winddir, windspeed};
    }
    result.forecast = forecast;

    // Adds 6 hour forecast
    const hourly = [];
    for (let i = 0; i < 6; i++){
        let hour = currentHour + 1 + i;
        if (hour < 24) {
            const {datetime, temp, precipprob, windspeed, winddir} = days[0].hours[hour];
            hourly[i] = {datetime, temp, precipprob, windspeed, winddir};
        }
        if (hour >= 24) {
            hour -= 24;
            const {datetime, temp, precipprob, windspeed, winddir} = days[1].hours[hour];
            hourly[i] = {datetime, temp, precipprob, windspeed, winddir};
        }
    }
    result.hourly = hourly;
    
return result; 
}

export {reduceAPIAnswer};