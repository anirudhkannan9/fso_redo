# Data4Countries: a React app using the Weatherstack API

This is a React app that fetches data from 2 different APIs (to do with countries and weather in their capitals), and conditionally renders information regarding the countries and weather in their capital. The conditional rendering is responsive to a search string, inputted by the user.

## Running the app

After downloading the repository, navigate to the directory that contains this project and run 
### `npm install`
to install the project's dependencies. 

You will need the .env file with my API key in order to make calls to the weatherstack API. Email me (anirudhkannan9[AT]gmail[DOT]com) to use mine, or simply request your own at https://weatherstack.com/ and add it to a .env file that you create locally (you get 1,000 free calls a month, iirc). 

Still in the directory containing this project: 
### `npm start`
starts the application at [http://localhost:3000](http://localhost:3000/)

## Demo

### Searching - many countries matching search string
If there are too many countries that match the search string (especially common if the search is of only a couple letters), the user is prompted to narrow down their search criteria.

![Search results when there are too many matching country names](https://github.com/anirudhkannan9/fso_redo/blob/main/submissions/part2/data4countries/images/too_many.png)


### Searching - 10 or fewer countries matching search string
If there are 10 or fewer countries matching the search string, each of the matching countries' name is listed, along with a button that allows the user to view more detailed information about that country (capital, population, flag, languages spoken, and current weather in the capital city). The user can also hide this information once it's shown.

![Search results when there are ten or fewer country names matching the search string](https://github.com/anirudhkannan9/fso_redo/blob/main/submissions/part2/data4countries/images/ten_or_less.png)

![Show/hide full info functionality](https://github.com/anirudhkannan9/fso_redo/blob/main/submissions/part2/data4countries/images/show_hide.png)

### Searching - 1 country matching search string
If there is only 1 country whose name matches the search string, the full information (as above) is displayed. 

![Full information on a country, including weather in its capital city](https://github.com/anirudhkannan9/fso_redo/blob/main/submissions/part2/data4countries/images/full_info.png)









# Boilerplate - Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
