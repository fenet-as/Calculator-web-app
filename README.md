

# Calculator App

A lightweight React calculator built with Vite. This project demonstrates a simple component-based calculator that performs basic arithmetic operations.

## Getting Started

### Prerequisites

* Node.js version 16 or higher

### Installation & Development

1. Install dependencies:

   ```bash
   npm install
   ```
2. Start the development server:

   ```bash
   npm run dev
   ```

## Project Structure

* **index.html** — Entry point for Vite
* **package.json** — Project scripts and dependencies
* **src/main.jsx** — React application entry
* **src/App.jsx** — Main application shell

### Components

* **Container** — Calculator logic and state management
* **Screen** — Displays input and results
* **Keycontainer** — Calculator buttons/keypad

## Implementation Details

* The main calculator logic is implemented in `src/components/Container.jsx`.
* The `inputValue` state controls the display on the Screen component and is updated via the `changeValue` callback.
* Styling is organized in `src/components/*.css`.

## Contributing

Contributions are welcome! For small fixes or improvements:

* Fork the repository
* Create a feature branch
* Submit a pull request

## License

Unlicensed — for learning and experimentation.

