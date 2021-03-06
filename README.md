## Crypto View

## Installation

To get this project, you can use ``git clone https://github.com/gustavonikov/crypto-view.git`` or download the file zip folder directly to your computer.
Once you did that, you can type directly on your computer's terminal or using an IDE, npm install, to install all the packages needed it to successful install.

## Usage

In this app was used the crypto compare API, to access the API you have to create an account on https://www.cryptocompare.com/ where you can the sign up and get the key.
Once you got the key to use the API, you have two simple ways to insert it:

*first one*: you can go to file **http/index.ts** as shown below and create a variable containing your key value, then change where is written process.env.CRYPTO_COMPARE_KEY to your variable containing the key value; 

*second one*: you can create an .env file in your project main directory, then create an environment variable named CRYPTO_COMPARE_KEY and set your key value to it.

```
import axios from 'axios';

export const cryptoHttp = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data',
    headers: {
        authorization: `Apikey ${process.env.CRYPTO_COMPARE_KEY}`
    }
});
```
After doing that, you should be ready to run the app with the available scripts.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
