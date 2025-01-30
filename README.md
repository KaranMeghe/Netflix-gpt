# Netflix Gpt

- vite
- Configured TailwindCSS
- Routing
- Header
- Login Form
- Sign up Form
- Form Validation
- useRef()
- FireBase setup
- Deploying app to production
- Create Account to Sign up
- Implement Sign In user Api
- Created Redux store with users slice
- Implemented signout
- Update profile api call
- Fetch Movies from TMDB
- BugFix: Sign up user display name and profile picture update
- BugFix: if user is not loggedin and trying to access /browse, redirect user to sigIn form
- unsubscribed to onAuthStateChanged callback
- feat: add constants.js for centralized URL management
- Created constants.js to store reusable URLs
- Added LOGO and USER_ICON constants for Netflix logo and user icon URLs
- Added `services.js` for API logic:
  - Implemented `fetchNowPlayingMovies` to fetch now-playing movies from TMDB
  - Included error handling and logging for API requests
- Created `loader.js` to define `nowPlayingMoviesLoader`:
  - Loader fetches data when the `/browse` route is accessed
- Updated React Router configuration in `main.js`:
  - Integrated `nowPlayingMoviesLoader` with the `/browse` route
  - Ensures data is fetched only when the user is logged in
- Improved code organization and error handling for a seamless user experience

# Features

- Login/Sign Up
  - Sign In / Sign up Form
  - Redirect to Browsw Page
- Browse (after authentication)

  - Header
  - Main Movie
    - Trailer in Background
    - Title and Description
    - Movie Suggestions
      - MoviesList \* N

- NetflixGPT
  - Search Bar
  - Movie Suggestions
