# CryptoApp

CryptoApp is a React dashboard for exploring cryptocurrency market information and related news. It combines market data from CoinRanking with news results from Bing News Search through RapidAPI.

## Features

- Browse cryptocurrency rankings and market statistics
- Open detailed information for individual currencies
- Search and filter available cryptocurrencies
- Read recent cryptocurrency news
- Navigate through a responsive Ant Design interface

## Data providers

The application uses APIs available through [RapidAPI](https://rapidapi.com/hub):

- [CoinRanking API](https://rapidapi.com/Coinranking/api/coinranking1) for cryptocurrency data
- [Bing News Search](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1) for related news

You need valid RapidAPI credentials before the live data requests can succeed. Keep credentials in local environment configuration and never commit private API keys to the repository.

## Run locally

You need a current Node.js installation and npm.

```bash
git clone https://github.com/ssdeniss/cryptoApp.git
cd cryptoApp
npm install
npm start
```

The development server is available at [http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm start` starts the development server.
- `npm test` runs the test suite in watch mode.
- `npm run build` creates an optimized production build.

## Project structure

- `src/components` contains reusable interface components.
- `src/services` contains API configuration and data requests.
- `src/App.js` assembles the main application routes and layout.

## Contributing

Create a focused branch, keep API credentials out of commits, and open a pull request that explains the change and how it was verified.
