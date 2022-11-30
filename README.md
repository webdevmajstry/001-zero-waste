# "Zero Waste" application project

This is the main repository for the mentoring project that we build with the intent to create a social media platform, through which the users will be able to post free ads about exchanging items that they don't need or services that they can provide for their community.

## Quick links

- [Technology stack](#technology-stack)
- [Installation](#installation)
- [Scripts](#scripts)
- [General folder structure](#general-folder-structure)
- [Conventions](#conventions)

## Technology stack

This project mainly uses [Next.js](https://nextjs.org/) 13 framework. We're also using [Jest](https://jestjs.io) for component testing and [Storybook](https://storybook.js.org) for separating the components from the application environment. It utilizes Webpack 5 to achieve best results in bundling and build time.

List of most important packages:

- Next.js
- Eslint
- Prettier
- Jest
- Storybook
- Husky

It's recommended to install respective IDE extensions for Eslint and Prettier.

## Installation

### Dependencies

You need to have [Node.js](https://nodejs.org/en/) installed in your system (LTS version recommended) and [Yarn 1](https://classic.yarnpkg.com/en/docs/install) package manager.

### Cloning this repository

Clone this repository using `TODO: replace with repository URL` and then run following commands in your terminal:

```
cd TODO: replace with repository's default folder name
yarn install
```

After the dependencies are installed, you're ready to start the development server using `yarn dev` or other scripts listed below.

### Backend

This repository's backend is mocked using [Mock Service Worker](https://msw.io/). Refer to the MSW's documentation in order to learn how to mock new backend features.

## Scripts

### `yarn dev`

Starts the development server. You can access it by opening `http://localhost:3000` address in your browser.

### `yarn build`

Prepares the production-ready version of the app. It can be used for deploy or investigate the final bundle size.

### `yarn start`

Starts the production build of the page. This command requires the `yarn build` command to be ran first.

### `yarn lint`

Runs Eslint on all source files.

### `yarn storybook`

Runs and opens the Storybook to work on application's components in separation from its environment.

### `yarn build-storybook`

Prepares the production-ready version of Storybook and our application's stories. It can be used to prepare to deploy the demo of our components collection.

### `yarn test`

Runs component and unit tests.

## General folder structure

```
| __mocks__       # general mocks for Jest purposes
| components      # reusable, non-feature specific components
| features        # domain-specific application feature components
| pages           # Next.js pages
| public          # publicly accessible assets
| styles          # Next.js global style files
| views           # domain-specific view wrapper components
| third-party     # any external libraries and their configs
```

## Conventions

### Architecture

`pages` is a folder native to Next.js and contains most abstract, top-level way to access different sections of the application. Any component in `pages` folder should only access other components from `views` and only serve as route handlers.

`views` are most abstract entities on application's domain level. They are used to put together `features` and `components` into working views.

`features` are mid-level components that contain their own sub-components, but can also use reusable components from the `components` directory. Use it to create stuff that solve specific business or domain needs.

`components` folder contains lowest-level components that are reusable and not tied to specific `features` or `views`.

To summarize:

> - `pages` <u>can access</u> `views`, `features`, `components` ✔️
> - `views` <u>can access</u> `features`, `components` ✔️
> - `features` <u>can access</u> `components` and its own sub-components ✔️
> - `components` <u>can access</u> only other `components` ✔️

> - `components` <u>cannot access</u> `features`, `views`, `pages` ❌
> - `features` <u>cannot access</u> `views`, `pages` ❌
> - `views` <u>cannot access</u> `pages` ❌

#### The barrel pattern

All components, views, features in this project must be exported using the [Barrel pattern](https://basarat.gitbook.io/typescript/main-1/barrel) in order to simplify imports and improve readability. Imports must use path aliases (eg. `import { Button } from '@components/Button'`) whenever they need to access something outside of their own access scope.

### Code review

Any changes to this repository must be pushed to a separate branch and a Pull Request must be opened.

A review from at least two of the author's peers must be done. All Pull Request must receive an approve from all of its reviewers before it can be merged to the `main` branch.

### Tests

Any new component must have component tests provided in a `*.test.js(x)` file placed next to the component. All of the tests must pass before merging new content to the `main` branch.

Any new additions to the `components` folder must be reflected in a respective story in Storybook.

### Reporting bugs

In case you encounter a bug in the application, a fix for which lies out of scope of your current work - **DO NOT** attempt to solve it within your current task's work. Instead create an issue in Github repo **and** a ticket in JIRA so that someone else can pick it up when they're free.
