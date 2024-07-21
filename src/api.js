async function queryAPI (location) {
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=JDXT9WS8AACUSN2YVY5DBUCRL`
    let answer = await fetch(URL);
    let result = await answer.json();
    return result;
}

export { queryAPI };