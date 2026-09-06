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
        <p id="weather">Weather will appear here</p>
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

    <div class="settings-panel" id="settings-panel">
      <div class="settings-header">
        <h2>Settings</h2>

        <button class="close-settings" id="close-settings" aria-label="Close-settings">
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

  </main>
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
