const response = await fetch ('https://api.sunrise-sunset.org/json?lat=50&lng=14.5');
const data = await response.json();

const sunrise = data.results.sunrise;
const sunset = data.results.sunset;

document.body.innerHTML += `
<p>Východ slunce: ${sunrise}</p>
<p>Západ slunce: ${sunset}</p>
`;
