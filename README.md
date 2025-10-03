🎬MovieBox

A modern React movie discovery app powered by The Movie Database (TMDb).
Search for movies, explore trending titles, and build your own Watchlist — all in one place!

✨Features
Search Movies: Find any movie by title
Trending & Popular Movies: See what’s hot now
Watchlist: Save your favorite movies locally (using localStorage)
Movie Ratings & Overview: Quick info on every movie
Clear Watchlist: Remove all movies in one click
Responsive UI: Works on desktop and mobile

🚀 Demo
👉 https://movieboxnadun.netlify.app

🛠️ Tech Stack
React (Vite-based)
React Router
TMDb API
Local Storage for persistence
Custom CSS styling

⚙️ Installation & Setup
Clone the repository:
git clone https://github.com/yourusername/moviebox.git
cd moviebox

Install dependencies:
npm install

Create a .env file in the root and add your TMDb API key:
VITE_TMDB_API_KEY=your_api_key_here

Run the project locally:
npm run dev

Build for production:
npm run build

🌍 Deployment
GitHub Pages
Install gh-pages:
npm install gh-pages --save-dev

Add this to package.json:
"homepage": "https://yourusername.github.io/moviebox",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

Deploy:
npm run deploy

🤝 Contributing
Pull requests are welcome!
If you’d like to add features (e.g., TV shows, filters, genres), feel free to fork and open a PR.

📜 License
This project is licensed under the MIT License.
You’re free to use and modify it. Just give credit.
