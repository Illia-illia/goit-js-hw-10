import './css/styles.css';

const DEBOUNCE_DELAY = 300;

function fetchCountries(name) {
  return fetch(`https://restcountries.com/v2/name/${name}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

console.log(fetchCountries('cana'));

// fetchCountries(name);
