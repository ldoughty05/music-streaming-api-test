# React Redux Starter Code

A minimal app to be used as starter code for labs and homework in the SOFT 260
course at UNL.  The starter code demonstrates basic usage of the React Hooks
API, the Redux Toolkit (RTK), React Router, Jest, and the React Testing Library
(RTL) in the context of a React Redux progressive web app (PWA).

# Quick Start

Recursively clone this repository and `cd` into the root folder:

```bash
$ git clone --recursive git@github.com:ldoughty05/music-streaming-api-test.git
$ cd music-streaming-api-test
```

(If you forget `--recursive` when cloning, you can `cd` into your clone and run
`git submodule update --init --recursive` instead.)

Install dependencies:

```bash
$ npm install
```

(You may see a few warnings because `create-react-app` transitively depends on
some deprecated packages.)

Optionally run the linter and the test suite:

```
$ npm run lint
$ npm run test
```

And then serve the application locally:

```
$ npm start
```

When you are done, press control-c to stop the server.
