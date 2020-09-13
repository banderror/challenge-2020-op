# Coding challenge

## Usage

Make sure you have `yarn` and install the dependencies:

```sh
yarn
```

Run the app in dev mode:

```sh
yarn start
```

Build the app and find the production-ready build artifacts in the `./build` folder:

```sh
yarn build
```

Run tests:

```sh
yarn test
```

## Comments on implementation

- I decided that for this challenge it would be enough to have TypeScript support, basic CSS support and Jest for covering `RomanNumerals` with tests.
- To keep it simple, I used [`create-react-app`](https://create-react-app.dev/) to generate a project boilerplate.
- Some of the concerns which I decided to not implement/use as part of the challenge: fancy polished UI, server to serve this SPA in prod mode, deployment, linting, CSS modules or CSS-in-JS.
- Folder structure is also pretty basic. It might be different is a real-world project and would depend on its size.
