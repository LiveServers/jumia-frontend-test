This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First make sure you have installed node 
- Please ensure you create a `.env` file in the root directory and pass the environment variables stipulated in the `.env.example` file


- Install dependencies by running:
```bash
npm install
# or
yarn install
```

- After dependencies have installed, build the project in production mode by running:

```bash
npm run build
# or
yarn run build
```

- After build is complete, run the project like this:
```bash
npm run start
# or
yarn run start
```

- You can run tests like this:
```bash
npm run test:coverage
# or - this runs the test and coverage and generates the coverage report, in html format
yarn run test:coverage 
```

- You can run linting checks by running:
```bash
npm run lint:fix
# or - this runs lint checks and fixes them too, if not, the issues have to be fixed manually
yarn run lint:fix
```

After that, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
## PROJECT STRUCTURE
Under `src` folder, we have the following directories each performing different tasks:

### Pages
The pages directory contains the routes found in the app

### Components
The components directory contains all the reusable components for the app

### Layout
The layout directory contains the structure of the UI. It acts as a wrapper for the app.

### Redux
The redux directory contains the setup for redux and its reducers.

### Theme
The theme directory contains the styling guide for the whole project.

### Utils
The utils directory contains the reusable functions for the app.

### __Tests__
The tests directory contains a sample unit and functional test.

