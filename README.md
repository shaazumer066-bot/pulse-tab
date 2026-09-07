# Pulse Tab

Pulse Tab is a custom new tab page for a web browser.

It gives you a simple dashboard with a live clock, date, weather, web search, quick links, themes, accent colors, and other small features.

## Features

### Live Clock and Date

Pulse Tab shows the current time and date.

The clock updates automatically, so the page does not need to be refreshed.

### Dynamic Greeting

The greeting changes depending on the current time.

It can show:

- Good Morning
- Good Afternoon
- Good Evening
- Good Night

This is handled with JavaScript by checking the current hour.

### Weather

Pulse Tab can get the user's approximate location using the browser's geolocation feature.

The coordinates are then used with APIs to get weather and location information.

The weather section shows:

- Location
- Temperature
- Weather condition
- Weather icon

The browser asks for permission before using the location.

### Web Search

There is a search bar on the main page.

When you enter something and submit the form, Pulse Tab opens a Google search for that query.

### Keyboard Shortcuts

Pulse Tab has keyboard shortcuts for easier navigation.

- `Ctrl + K` → Focus the search bar
- `/` → Focus the search bar
- `Escape` → Close settings and remove focus from search

### Quick Links

The dashboard has quick links for websites that are used often.

The default links are:

- GitHub
- YouTube
- Gmail

You can also add your own links.

### Custom Links

Custom links are saved using browser `localStorage`.

This means your links stay saved even after refreshing the page.

You can also delete custom links whenever you want.

### Themes

Pulse Tab has two themes:

- Dark
- Light

The selected theme is saved in `localStorage`, so it stays selected after refreshing the page.

### Accent Colors

You can choose different accent colors:

- Blue
- Red
- Purple
- Green
- Orange

The selected accent color is used for things such as buttons, borders, and focus effects.

### Glass Effect

The dashboard uses translucent backgrounds, borders, and blur effects to create a glass-like design.

The background image is also used behind the dashboard.

### Animations

The CSS contains small animations for different parts of the page.

For example, cards can fade in when the page loads and buttons have hover effects.

### Responsive Design

The layout changes depending on the screen size.

On smaller screens:

- The dashboard changes to one column.
- The search form changes to a vertical layout.
- Quick links also change to fit the screen.
- The settings panel uses the full screen width.

## How the Code Works

### JavaScript

Most of the interactive features are handled in `src/main.js`.

JavaScript is used for:

- Updating the clock
- Updating the date
- Changing the greeting
- Getting the user's location
- Fetching weather data
- Handling the search form
- Handling keyboard shortcuts
- Opening and closing settings
- Changing themes
- Changing accent colors
- Adding custom links
- Removing custom links
- Saving settings and links in `localStorage`

### Weather APIs

The weather feature uses the browser's geolocation API first.

The browser gives the approximate latitude and longitude after the user gives permission.

Pulse Tab then uses these coordinates with:

- Open-Meteo API for weather data
- BigDataCloud Reverse Geocoding API for the location name

The result is then displayed in the weather card.

### LocalStorage

`localStorage` is used to save things in the browser.

Pulse Tab uses it for:

- Custom links
- Selected theme
- Selected accent color

Because the data is stored in the browser, it stays available when the page is opened again.

### CSS

The main styling is in `src/style.css`.

CSS is used for:

- Page layout
- Colors
- Glass effect
- Buttons
- Cards
- Hover effects
- Animations
- Themes
- Accent colors
- Mobile layout

The CSS uses variables such as `--accent-color` so JavaScript can change the accent color without having to change every element separately.

## Screenshots

### Main Dashboard

![Pulse Tab Main Dashboard](screenshots/main-dashboard.png)

### Settings

![Pulse Tab Settings](screenshots/settings.png)

### Custom Quick Links

![Pulse Tab Custom Quick Links](screenshots/custom-links.png)
