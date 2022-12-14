# Setting up the app

1. Clone this repo using `git clone`.
2. This app is meant to be used with a specific back-end app running on port 3000. You can find the repo here: https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard
   Alternately, you can use the built-in API mocks by importing from `services/mockManager.js` instead of `services/apiManager.js` at the top of `pages/dashboard.jsx` (change the file path, not the imports).
3. (optional) I recommend using `nvm` (https://github.com/nvm-sh/nvm/blob/master/README.md) to run the app with the correct version of NodeJS. Simply use the command `nvm use` at the root folder.
4. Create a `.env` file at the root of the project, specify the `REACT_APP_API_PATH` variable containing the base path for the API.
5. Run `npm i` to install all necessary dependencies.
6. Run the backend server then use `npm run start` to start the development server.
   Note: to view the page, make sure the request params are equal to one of the users' id!
   Ex: `localhost:9999/18`
7. Happy coding!

# Working on the project

- This app uses recharts to render data charts. See the docs (https://recharts.org/en-US/) for more information.
