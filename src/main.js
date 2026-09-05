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
          <a href="https://github.com" target="_blank">GitHub</a>
          <a href="https://youtube.com" target="_blank">YouTube</a>
          <a href="https://gmail.com" target="_blank">Gmail</a>
        </div>
      </article>

    </section>

  </main>
`