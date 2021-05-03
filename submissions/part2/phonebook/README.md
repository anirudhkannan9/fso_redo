This is a React app representing a phonebook that includes a rudimentary backend server (with json-server) to store data. 

Users can add new contacts to their phonebook, and are presented with a colourful message indicating success. 

![Successfully added user message](https://github.com/anirudhkannan9/fso_redo/blob/main/submissions/part2/phonebook/screenshots/added_user.png)

Users can search (case-indifferent) for contacts in their phonebook, and the app will re-render to display only contacts with names that match the search string. 

![Searching for contact, multiple matches](https://github.com/anirudhkannan9/fso_redo/blob/main/submissions/part2/phonebook/screenshots/search_many_matches.png)

![Searching for contact, one match](https://github.com/anirudhkannan9/fso_redo/blob/main/submissions/part2/phonebook/screenshots/search_one_match.png)

Users can also update the number of a contact that already exists (they're asked if they're sure first), and are presented with a colourful message indicating success once the operation is completed. 

![Confirm update number](https://github.com/anirudhkannan9/fso_redo/blob/main/submissions/part2/phonebook/screenshots/update_part_1.png)

![Number updated successfully](https://github.com/anirudhkannan9/fso_redo/blob/main/submissions/part2/phonebook/screenshots/update_part_2.png)

Lastly, edge cases where the user opens the app and interacts with it in separate windows are handled. If a user deletes a contact in one window, and then attempts to change the number of the recently-deleted contact in another window, they are presented with a styled error message indicating that the contact has already been removed from their phonebook.

![Update error](https://github.com/anirudhkannan9/fso_redo/blob/main/submissions/part2/phonebook/screenshots/update_error.pngt)





# Getting Started with Create React App

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
