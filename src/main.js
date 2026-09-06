import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="pulse-container">

    <header class="top-bar">
      <div class="greeting">
        <p class="greeting-text">Good evening</p>
      </div>

      <button class="settings-button" aria-label="Open settings">
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