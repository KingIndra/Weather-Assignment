## Installation

To get started, make sure you have [Node.js](https://nodejs.org/) installed on your machine. Then, navigate to the project directory and run the following command to install all the dependencies:

```bash
npm install
```

## API Key

To access the weather data, you will need an API key from [WeatherAPI](https://www.weatherapi.com/). Follow the instructions on their website to obtain a free API key.

## Environment Variables

After acquiring the API key, open a file named `.env` located in the root directory of your project. Insert your API key into this file under the variable name `VITE_API_KEY`.

Make sure to keep your API key secure and avoid sharing it publicly.

## JSON Server

To run the JSON server, use the following command:

```bash
npx json-server --watch db.json --port 4000
```

This will start the JSON server and you can access your data at [http://localhost:4000/](http://localhost:4000/).

## Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will launch the development server and you can access your application at [http://localhost:5173/](http://localhost:5173/).
