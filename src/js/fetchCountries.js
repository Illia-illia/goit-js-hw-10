const START_URL = 'https://restcountries.com/v3.1';

export function fetchCountries(name) {
  return fetch(`${START_URL}/name/${name}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}
