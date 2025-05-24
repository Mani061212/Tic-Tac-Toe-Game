# Tic-Tac-Toe-Game
Tic Tac Toe Game 🎮 : Classic Tic Tac Toe game built with React and Tailwind CSS. Features dark/light mode, win/draw modals with quotes, scrollable move history, and responsive design. Smooth gameplay with animations and highlighted winning squares.

# 🎮 Tic Tac Toe Game
A classic Tic Tac Toe game built with React, styled with Tailwind CSS, featuring a dynamic dark/light mode, interactive win/draw announcements with quotes, and a scrollable game history.


# ✨ Features

* Classic Tic Tac Toe Gameplay: Play the traditional 3x3 grid game against another player.

* Interactive Win/Draw Announcement Modal: A celebratory modal appears upon game completion (win or draw), displaying the outcome.

* Contextual Quotes: Fetches and displays relevant quotes from the Quotable API based on the game's outcome (e.g., inspirational for a win, neutral for a draw).

* Robust Quote API Error Handling: Provides clear feedback to the user if there are issues fetching quotes from the API.

* Dark/Light Mode Toggle: Seamlessly switch between a light and dark theme for improved readability and user preference.

* Scrollable Game History: Review all past moves within a dedicated, scrollable section without affecting the main layout.

* Responsive Design: Optimized for various screen sizes using Tailwind CSS.

* Modern React Development: Built with React functional components and hooks for efficient state management.

* Vite Build Tool: Fast development server and optimized build process.

* Enhanced UI/UX:
  - Winning squares are highlighted.
  - Buttons and squares have subtle hover effects.
  - Simple celebration animation for wins.


# 🚀 Technologies Used

* React.js: A JavaScript library for building user interfaces.

* Vite: A fast build tool that provides a lightning-fast development experience.

* Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

* react-icons: A library for popular icon packs (used for moon/sun icons and celebration stars).


# ⚙️ Setup Instructions

* Follow these steps to get the project up and running on your local machine.

  - Prerequisites

    * Node.js (LTS version recommended)
    
    * npm (Node Package Manager) or Yarn

  - Installation

    * Clone the repository (or create a new Vite project):

    * If you're starting from scratch:
    
     - npm create vite@latest tic-tac-toe-game -- --template react

     - cd tic-tac-toe-game

    * If you have the project already:

     - git clone <repository-url> tic-tac-toe-game

     - cd tic-tac-toe-game

    * Install dependencies:
   
     - npm install
  
    * Install Tailwind CSS:

     - npm install -D tailwindcss postcss autoprefixer
     
     - npx tailwindcss init -p

    * Configure Tailwind CSS:

    - Open tailwind.config.js and ensure the content array includes your React files:

      /** @type {import('tailwindcss').Config} */
      export default {
       content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Make sure this line is present
       ],
       theme: {
       extend: {},
      },
      plugins: [],
      }

    * Add Tailwind Directives to CSS:

     - Open src/index.css (or src/App.css if you prefer) and add the following at the very top:
     
       @tailwind base;
       @tailwind components;
       @tailwind utilities;


    * Install react-icons:

     - npm install react-icons


    * Ensure Component Files are in src/components/:

     - Create a folder named components inside src.

     - Place Board.jsx, Celebration.jsx, ErrorMessage.jsx, and Square.jsx files inside src/components/.

# ▶️ How to Run the Game

 * After completing the setup:
 * Start the development server:

   - npm run dev


* Open your browser and navigate to the address shown in your terminal (usually http://localhost:5173).

* You should now see the Tic Tac Toe game running!

![Screenshot 2025-05-24 234524](https://github.com/user-attachments/assets/060c0ec8-a877-4387-8639-ba2b46fe622d)
![Screenshot 2025-05-24 234305](https://github.com/user-attachments/assets/1dea065f-0743-4f40-bfde-05fc07b466fe)
![Screenshot 2025-05-24 234002](https://github.com/user-attachments/assets/c04317aa-5fca-458f-89e1-e8178d66395e)
![Screenshot 2025-05-24 233944](https://github.com/user-attachments/assets/9483bcee-4d43-45df-b63c-39d95495b631)
