## General characteristics

 - The project can access the functionality through four social networks, google, facebook, twitter and github if the user has the same registered email an error will be returned.
 - When the login passes successfully, the useEffect hook is used to bring the initial information of the logged in user and the posts.
 - When the user enters, the data with which he entered and his profile picture will be seen in the header
 - In each post the information returned by the api is shown
 - To show the data of the user who created the post, you must click on the user's image with this the modal will open and show the data of the same
 - To see the comments at the bottom of the card there is a comment icon which if clicked will open the modal, to show the total number of comments and the comments with their respective information
 - To filter the posts, you can click on the tags already listed in the cards, with this the filtered active tag will be displayed and the posts filtered by the selected tag will be shown, if you remove the filter it will search for the initial posts again
 - The feed page is also responsive so it can be validated from a mobile device


## Live demo

[Demo](https://network-tests.vercel.app/)

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
