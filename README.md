# React Redux Starter Code

A minimal app to be used as starter code for labs and homework in the SOFT 260
course at UNL.  The starter code demonstrates basic usage of the React Hooks
API, the Redux Toolkit (RTK), React Router, Jest, and the React Testing Library
(RTL) in the context of a React Redux progressive web app (PWA).

# Quick Start

Recursively clone this repository and `cd` into the root folder:

```
$ git clone --recursive git@git.unl.edu:soft-core/soft-260/react-redux-starter-code.git
$ cd react-redux-starter-code
```

(If you forget `--recursive` when cloning, you can `cd` into your clone and run
`git submodule update --init --recursive` instead.)

Install dependencies:

```
$ npm install
```

(Near the end you may see some warnings because `create-react-app` transitively
depends on some deprecated packages.)

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

# Folders and Files

The folders and files in the starter code are briefly described below.  React
Redux applications use a model-view-controller (MVC) architecture (see
<https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller>), so in
these descriptions the terms "model", "view", and "controller" refer to those
roles from MVC.

## Submodules

*   The Git submodule `stylelint-config` contains the stylelint configuration
    for the coding style used in the `minimal-app` project.

*   The Git submodule `eslint-config` contains the ESLint configuration for the
    coding style used in the `minimal-app` project.  Per `create-react-app`
    convention, in a development build of the main app, a separate, weaker
    coding style also warns at runtime about likely bugs.

## General Configuration

*   The file `minimal-app/.gitignore` prevents non-source-code files from being
    accidentally committed to the repository.

*   The file `minimal-app/package.json` describes the project and its
    dependencies.  It can be edited to customize the inputs and processes used
    in various software lifecyle tasks like linting, testing, or deploying.

*   The file `minimal-app/package-lock.json` records the exact set of
    dependencies used to satisfy the requirements in `minimal-app/package.json`.
    It should not be hand-edited; use commands like `npm install` or `npm
    uninstall` from the `minimal-app` directory to make changes.

*   The folder `minimal-app/node_modules` contains the dependencies installed by
    `npm`.

## Application Infrastructure

*   The file `minimal-app/public/manifest.json` provides data needed to run the
    web application as a PWA.  (See
    <https://developer.mozilla.org/en-US/docs/Web/Manifest> for more
    information.)

*   The file `minimal-app/public/logo.svg` is the image used for the app's icon.
    (A maskable icon is recommended; see <https://web.dev/maskable-icon/> for
    more information and <https://maskable.app/> to test an image.)

*   The file `minimal-app/public/index.html` contains the skeleton document in
    which the app's HTML is embedded.

*   The file `minimal-app/src/index.js` specifies other wrappers around the
    application proper than cannot be given in `index.html`, usually because
    they involve React components, not pure HTML.  In this case, the wrappers:

    *   Enable extra checks at development time using React strict mode.  (See
        <https://reactjs.org/docs/strict-mode.html> for more information.)

    *   Make the Redux store from `minimal-app/src/app/store.js` available to
        the app's React components.

    *   Enable routing with React Router.  (See
        <https://reacttraining.com/react-router/web> for more information.)

    *   Apply the letterboxed portrait layout from `index.css`, which is
        described next.

*   The file `minimal-app/src/index.css` contains the CSS associated with
    `index.html`.  In this case the CSS forces a letterboxed portrait layout and
    specifies a sans-serif font.

*   The file `minimal-app/src/service-worker.js` acts as a proxy server, which
    among other things makes it possible to run a PWA while offline.  (See
    <https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API> for
    more information.)

*   The file `minimal-app/src/serviceWorkerRegistration.js` registers the
    service worker so that the browser knows about it.

## Model and Controller Code

*   The file `minimal-app/src/app/store.js` combines the models provided by the
    app's features to create a model for the whole app.

*   The file `minimal-app/src/features/counter/counterSlice.js` implements a
    Redux slice, the model and associated controllers for a particular feature,
    which in this case is a simple counter.  (See
    <https://redux-toolkit.js.org/> for more information.)

## View Code

*   The file `minimal-app/src/app.js` implements the React component
    representing the entire app.  In this case only one route, `/`, is
    implemented, but the returned fragment is intentionally written so that it
    is easy to add additional routes.

*   The file `minimal-app/src/features/counter/counter.js` implements a React
    component that counts the number of times a user has tapped a button.  This
    component uses the slice from `counterSlice.js`.

*   The file `minimal-app/src/features/counter/counter.module.css` provides
    styles for the React component in `counter.js`.

## Test Infrastructure

*   The file `minimal-app/src/setupTests.js` provides setup code that applies to
    every test case.  In this case that code imports RTL's custom matchers from
    testing React components.

*   The file `minimal-app/src/testing/mockRedux.js` provides the ability to mock
    the part of Redux used by React components under the React Hooks API so that
    those view components can be tested independently of model and controller
    code.

## Test Code

*   The file `minimal-app/app.test.js` demonstrates a snapshot regression test
    of the app component with mocked selectors.  (See
    <https://jestjs.io/docs/en/snapshot-testing> for more information.)

*   The file `minimal-app/src/__snapshots__/app.test.js.snap` contains the
    oracles for the snapshot tests in `app.test.js`.  When the tests are run in
    watch mode (using the command `npm test`), these oracles can be updated
    interactively if a snapshot test fails due to changed requirements.

*   The file `minimal-app/src/features/counter/counter.test.js` demonstrates
    non-snapshot tests of the view code in the counter component.

*   The file `minimal-app/src/features/counter/counterSlice.test.js`
    demonstrates tests of model and controller code.

# Adaptation Checklist

When adapting this code for a new project, make sure to do at least the
following:

*  Change the project name, version number, and description in
   `minimal-app/package.json`.

*  Change the short name, name, description, colors, and other settings in
   `minimal-app/public/manifest.json`.

*  Change the title, description, and theme color in
   `minimal-app/public/index.html`.

*  Rename the folder from `minimal-app` to something descriptive and change the
   corresponding entries in the outer `package.json`.

*  Rerun `npm install` to update `package-lock.json` based on the above changes.
