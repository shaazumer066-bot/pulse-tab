# pulse-tab

pulse-tab is a custom new-tab page that has many features like time, web search, weather and themes, etc...

I made this because I wanted to learn javascript, css and also I wanted to explore API, So I added weather API :)

## Why I Made This

I started this project as part of Hack Club's Stardance "Give Your Website a Pulse" mission.

At first, I planned to make a simple new-tab page, but I kept adding features as I learned more. I decided to make Pulse Tab feel like a small personal dashboard instead of just a normal new-tab page.

btw my goals was to build everything myself using HTML, CSS, and JavaScript instead of using a website builder.

## Features

### Live Clock and Date

The main part of Pulse Tab shows the current time and date.

The clock updates automatically, so I don't need to refresh the page to see the current time.

### Dynamic Greeting

Pulse Tab changes the greeting depending on the time of day.(is not it cool enough???;)

For example, it can show:

- Good morning
- Good afternoon
- Good evening
- Good night

This was one of the smaller JavaScript features I added to make the page feel more alive.

### Weather

Pulse Tab uses the user's browser location to get their approximate coordinates.(I know this is coooool!!!!)

I use the Open-Meteo API to get the current weather and the BigDataCloud reverse geocoding API to turn the coordinates into a readable location name.

The weather card shows:

- Location
- Temperature
- Weather condition
- Weather icon

The browser asks for location permission before using this feature.

### Web Search

There is a search bar in the middle of the page.

When a search is submitted, Pulse Tab sends the query to Google.

I also added keyboard shortcuts so the search bar can be accessed quickly.

### Keyboard Shortcuts

Pulse Tab supports a few shortcuts:

- `Ctrl + K` → Focus the search bar
- `/` → Focus the search bar
- `Esc` → Close settings and remove focus from search

I added these because I wanted the new-tab page to be usable without always reaching for the mouse.(small detailing :)

### Quick Links

Pulse Tab has quick links for websites I use often.

The default links include:

- GitHub
- YouTube
- Gmail

I also made it possible to add your own links.

### Custom Links with LocalStorage

When a custom link is added, Pulse Tab saves it using browser `localStorage`.

This means the links stay there even after refreshing the page.

Custom links can also be deleted from the dashboard.

### Themes

Pulse Tab has both dark and light themes.

The selected theme is saved in localStorage, so the preference remains after refreshing the page.

### Accent Colors

There are several accent colors available:

- Blue
- Red
- Purple
- Green
- Orange

The accent color changes parts of the interface such as buttons, borders, and focus effects.

### Glassmorphism UI(THIS LOOKs COOOOL!!)

I used translucent cards, borders, blur effects, and a background image to create the glass-like appearance of the dashboard.

I wanted the interface to look clean without adding too many elements to the screen.

### Animations

I added small CSS animations to make the interface feel smoother.

For example, the main page and cards fade in when the page loads, and buttons and links have hover effects.

### Responsive Design

The layout also adapts to smaller screens.

The dashboard changes from two columns to one column, and the search bar and quick links adjust for mobile-sized screens.

## What I Learned

This project helped me learn a lot more about JavaScript than I knew before starting it.

Some of the things I worked with were:

- Fetching data from APIs
- Using browser geolocation
- Working with `localStorage`
- Handling form submissions
- Creating keyboard shortcuts
- Changing CSS variables with JavaScript
- Building responsive layouts
- Deploying a Vite project to GitHub Pages
- Using Git and GitHub for version control

The weather feature was especially useful for learning how APIs work because I had to get the user's coordinates first and then use those coordinates to request weather data.

## Tech Stack

- HTML
- CSS
- JavaScript
- Vite
- Open-Meteo API
- BigDataCloud Reverse Geocoding API
- LocalStorage
- GitHub Pages

## Screenshots

### Main Dashboard

![Main Dashboard](screenshots/main-dashboard.png)

### Settings

![Settings](screenshots/settings.png)

### Custom Quick Links

![Custom Links](screenshots/custom-links.png)

## Running It Locally

Clone the repository:)

```bash
git clone https://github.com/shaazumer066-bot/pulse-tab.git
