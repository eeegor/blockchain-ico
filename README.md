# React Blockchain Inputs

<!-- ![](preview.gif) -->

This is an example of a decoupled frontend app implemented with `React` and `Redux`, fetching data from a rest api endpoint.

- You can find a [online demo here](https://inputs.now.sh/)

## :gear: Configuration

Modify configuration in `.env` (start by renaming `env.example` to `.env`, [wondering why?](https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7))

Below the most important setting to get you started

```bash
API_URL=https://your-api-url.com
```


## :rocket: Getting started

After you have cloned the repository to your computer please run the following commands inside the project folder:

```bash
# install dependencies
yarn

# run the app (localhost:8080)
yarn start
```

## :construction: Test

To make sure the application works as expected you can run the test suite like this:

```bash
# runs all test files
yarn test

# with coverage report
yarn test --coverage

# watch
yarn test --watch

# run tests that match a spec-name (e.g `App` or `components/Form`)
yarn test name-of-spec

# update snapshots that are out of date
yarn test --updateSnapshot
```

> A full list of `jest` cli commands can be found [here](https://jestjs.io/docs/en/cli)

## :rainbow: Prettier

Prettier is a code formatter that ensures that all outputted code conforms to a consistent style

Run the following command before each commit to make sure your changes are valid :nerd_face:

Formats all `Js/Jsx` files according to `prettier.config.js` presets

```bash
# format all files
yarn format
```

## :vertical_traffic_light: Linter

> 
> Code linting can be seen, in a more broad sense, as static code analysis.
> 
> [What's the difference between Lint and Prettier?](https://restishistory.net/blog/whats-the-difference-between-eslint-and-prettier.html)

Lints all `Js/Jsx` files according to `.eslintrc` presets

```bash
# lint all files
yarn lint
```

> **Note:** Before running `yarn lint`, please run `yarn format` first :wink:

## :factory: Build

If you wish to host this app, you will need to run the build command. After you've run the command, you will find the build artefacts in the `/dist` folder.

```bash
# build static files
yarn build
```

## :truck: Deploy to Zeit.co with `now`

If you wish, you can deploy this app to Zeit.co. To do so please configure the following settings before you hit `yarn deploy` 

> Info: It's also possible to host with any other providers (e.g. Heroku) which support `node.js` but you'll need to configure them on your own

1. Modify configuration in `.env` (start by renaming `env.example` to `.env`, [wondering why?](https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7))
2. Modify configuration in `now.json` (start by renaming `now.example.json` to `now.json`
3. Deploy!

> Info: `Zeit.co now` creates deployments with random url names. In order to properly configure `cors` it is recommended to create an `alias` for your domain. 
> 
> It's easy to do with the following command after deployment:
> 
> ```bash
> now alias {the-random-deployment-url} {alias-name}

Finally now you're ready to:

```bash
# deploy app to production
yarn deploy
```
> Info: This will run `format` and `lint` in the `prebuild` step, to make sure the deployed version is meeting the requirements.
>
> If you want to skip this step, you can remove the flag from the `prebuild` in `package.json/scripts`

## :green_book: Tools, Libraries and Packages

### React

A JavaScript library for building user interfaces

More info [here](https://reactjs.org/)

##### Additional Packages
- [React Dom](https://reactjs.org/docs/react-dom.html)
  - The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.

### Babel, Lint & Prettier

This application follows the [airbnb](https://github.com/airbnb/javascript) coding styleguide conventions for `ECMAScript 2018` setup with [webpack 3](https://webpack.js.org/), [babel 7](https://github.com/babel/babel), [eslint](https://eslint.org/) and [prettier](https://github.com/prettier/prettier).