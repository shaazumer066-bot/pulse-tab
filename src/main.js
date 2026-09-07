import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="pulse-container">

    <header class="top-bar">
      <div class="greeting">
        <p class="greeting-text">Good evening</p>
      </div>

      <button class="settings-button" id="settings-button" aria-label="Open settings">
        ⚙
      </button>
    </header>

    <section class="hero">
      <p class="date" id="date">Loading date...</p>
      <h1 class="clock" id="clock">00:00</h1>
    </section>

    <section class="search-section">
      <form id="search-form">
        <input
          id="search-input"
          type="text"
          placeholder="Search the web..."
          autocomplete="off"
        />
        <button type="submit">Search</button>
      </form>
    </section>

    <section class="dashboard">

      <article class="card weather-card">
        <h2>Weather</h2>
        <p id="weather-location">Getting your location...</p>
        <div class="weather-info">
          <span id="weather-icon">🌤️</span>
          <span id="weather-temperature">--°C </span>
        </div>
        <p id="weather-condition">Loading weather...</p>
      </article>

      <article class="card links-card">
        <h2>Quick Links</h2>

        <div class="quick-links">
          <a class="quick-link" href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img class="link-icon" src="public/images/github.png" alt="GitHub">
          <span class="link-name">Github</span>
          </a> 
          <a class="quick-link" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img class="link-icon" src="public/images/youtube.png" alt="YouTube">
          <span class="link-name">YouTube</span>
          </a>
          <a class="quick-link" href="https://gmail.com" target="_blank" rel="noopener noreferrer">
          <img class="link-icon" src="public/images/gmail.png" alt="Gmail">
          <span class="link-name">Gmail</span>
          </a>
        </div>
      </article>

    </section>
  </main>

    <div class="settings-panel" id="settings-panel">
      <div class="settings-header">
        <h2>Settings</h2>

        <button type="button" class="close-settings" id="close-settings" aria-label="Close-settings">
          ×
        </button>
      </div>

      <div class="setting-group">
        <h3>Theme</h3>

        <div class="theme-options">
          <button class="theme-option" data-theme="dark">
            Dark
          </button>

          <button class="theme-option" data-theme="light">
            Light
          </button>
        </div>
      </div>

      <div class="setting-group">
        <h3>Accent Color</h3>

        <div class="accent-options">
          <button class="accent-option blue" data-accent="blue" aria-label="Blue"></button>
          <button class="accent-option red" data-accent="red" aria-label="Red"></button>
          <button class="accent-option purple" data-accent="purple" aria-label="Purple"></button>
          <button class="accent-option green" data-accent="green" aria-label="Green"></button>
          <button class="accent-option orange" data-accent="orange" aria-label="Orange"></button>
        </div>
      </div>
    </div> 
`

function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2,'0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  document.querySelector('#clock').textContent = `${hours}:${minutes}`;

  const date = now.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  document.querySelector('#date').textContent = date;
}

updateClock();
setInterval(updateClock, 1000);

function updateGreeting() {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 18) {
    greeting = 'Good afternoon';
  } else if (hour < 22) {
    greeting = 'Good evening';
  } else {
    greeting = 'Good night';
  }

  document.querySelector('.greeting-text').textContent = greeting;
}

updateGreeting();
setInterval(updateGreeting, 60000);

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if(!query) {
    return;
  }

  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

  window.location.href = searchUrl;
});

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    searchInput.focus();
  }
});

const settingsButton = document.querySelector('#settings-button');
const settingsPanel = document.querySelector('#settings-panel');
const closeSettings = document.querySelector('#close-settings');

settingsButton.addEventListener('click', () => {
  settingsPanel.classList.add('open');
});

closeSettings.addEventListener('click', () => {
  settingsPanel.classList.remove('open');
});

const themeButtons = document.querySelectorAll('.theme-option');

themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
    const theme = button.dataset.theme;
    document.body.dataset.theme = theme;
    localStorage.setItem('pulse-theme', theme);
  });
});

const accentButtons = document.querySelectorAll('.accent-option');

accentButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const accent = button.dataset.accent;
    document.body.dataset.accent = accent;
    localStorage.setItem('pulse-accent', accent)
  });
});

const savedTheme = localStorage.getItem('pulse-theme');
const savedAccent = localStorage.getItem('pulse-accent');
document.body.dataset.theme = savedTheme || 'dark';
document.body.dataset.accent = savedAccent || 'blue';

async function getWeather(latitude, longitude) {
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`;

  try {
    const response = await fetch(weatherUrl);
    if(!response.ok) {
      throw new Error('Weather request failed');
    }
    const data = await response.json();
    const temperature = Math.round(data.current.temperature_2m);
    const weatherCode = data.current.weather_code;

    document.querySelector('#weather-temperature').textContent =
     `${temperature}°C`;

    document.querySelector('#weather-condition').textContent =
    getWeatherDescription(weatherCode);

    document.querySelector('#weather-icon').textContent =
    getWeatherIcon(weatherCode);

  } catch (error) {
    console.error('Weather error:', error);

    document.querySelector('#weather-condition').textContent =
    'Unable to load weather';
  }
}

function getWeatherDescription(code) {
  if (code === 0) {
    return 'Clear sky';
  }

  if (code === 1 || code === 2) {
    return 'Partly cloudy';
  }

  if (code === 3) {
    return 'Cloudy';
  }

  if ([45, 48].includes(code)) {
    return 'Foggy';
  }

  if ([51, 53, 55, 56, 57].includes(code)) {
    return 'Drizzle';
  }

  if ([61, 63, 65, 66, 67].includes(code)) {
    return 'Rain';
  }

  if ([71, 73, 75, 77].includes(code)) {
    return 'Snow';
  }

  if ([80, 81, 82].includes(code)) {
    return 'Rain showers';
  }

  if ([95, 96, 99].includes(code)) {
    return 'Thunderstorm';
  }

  return 'Unknown weather';
}

function getWeatherIcon(code) {
  if (code === 0) {
    return '☀️';
  }

  if (code === 1 || code === 2) {
    return '🌤️';
  }

  if (code === 3) {
    return '☁️';
  }

  if ([45, 48].includes(code)) {
    return '🌫️';
  }

  if ([51, 53, 55, 56, 57].includes(code)) {
    return '🌦️';
  }

  if ([61, 63, 65, 66, 67].includes(code)) {
    return '🌧️';
  }

  if ([71, 73, 75, 77].includes(code)) {
    return '❄️';
  }

  if ([80, 81, 82].includes(code)) {
    return '🌦️';
  }

  if ([95, 96, 99].includes(code)) {
    return '⛈️';
  }

  return '🌤️';
}

function getUserLocation() {
  if (!navigator.geolocation) {
    document.querySelector('#weather-location').textContent =
      'Location is not supported';

    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getLocationName(latitude, longitude);
      getWeather(latitude, longitude);
    },

    () => {
      document.querySelector('#weather-location').textContent =
        'Location permission denied';

      document.querySelector('#weather-condition').textContent =
        'Unable to get your location';
    }
  );
}

async function getLocationName(latitude, longitude) {
  const locationUrl =
    `https://api.bigdatacloud.net/data/reverse-geocode-client` +
    `?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&localityLanguage=en`;

  try {
    const response = await fetch(locationUrl);

    if (!response.ok) {
      throw new Error('Location request failed');
    }

    const data = await response.json();

    const city = data.city || data.locality || 'Unknown location';
    const state = data.principalSubdivision || '';

    document.querySelector('#weather-location').textContent =
      state ? `${city}, ${state}` : city;

  } catch (error) {
    console.error('Location name error:', error);

    document.querySelector('#weather-location').textContent =
      'Location unavailable';
  }
}

getUserLocation();