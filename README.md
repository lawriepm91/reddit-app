## Enviroments

The application had been developed in:

<ul>
	<li>Node v12.18.3</li>
	<li>Google chrome v85.0.4183.83</li>
</ul>

## Getting Started

### 1. Clone the repo
### 2. Run ``npm run install`` in the project directory
### 3. Set `NODE_PATH=src/` in a ``.env``  file
### 4. Run ``npm run start`` to the start the development server
### 5. Navigate to  [http://localhost:3000](http://localhost:3000)

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br  />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  
### `npm run test`

Launches the test runner in the interactive watch mode.<br  />

### `npm run lint`
  
Lints the application using the Airbnb style guide.<br  />
  
## What it does

<ul>
	<li>Queries the Reddit top pics endpoint</li>
	<li>Returns a list of Reddits top pics adding them to a Redux store</li>
	<li>The custom hook `useTopPics`  returns them to the view</li>
	<li>Clicking on a pic directs the user to the detail page</li>
	<li>The custom hook `usePic`  updates the store with the pic and its comments</li>
	<li>These are returned to the view</li>
</ul>
