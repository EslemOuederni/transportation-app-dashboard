# ABOUT

A transportation management Dashboard.

The dashboard manage:

    - Admin Management
    - Transportation Means Management
    - Trips Management
    - Tickets Management

# Full Tech Stack

    - ReactJS
    - Express
    - Node
    - MongoDB
    - Mongoose

# File Structure

## File structure

#### `client` - Holds the client application

- #### `public` - This holds all of our static files

- #### `src`

- #### `assets` - This folder holds assets such as our logo

- #### `components` - This folder holds all of the different components that will make up our views

- #### `Context` - These represent context files such as AuthContext

- #### `Hooks` - These are the custom hooks for the authorization

- #### `Pages` - These represent a unique page on the website i.e. HomePage or LoginPage

- #### `App.jsx` - This is what renders all of our browser routes and different views

- #### `main.jsx` - This is what renders the react app by rendering App.jsx, should not change

- #### `package.json` - Defines npm behaviors and packages for the client

#### `server` - Holds the server application

- #### `config` - This holds our configuration files, like mongoDB uri

- #### `controllers` - These hold all of the callback functions that each route will call

- #### `middleware` - These hold all of the middleswares such as authentication middleware in order to verify tokens

- #### `models` - This holds all of our data models

- #### `routes` - This holds all of our HTTP to URL path associations for each unique url

- #### `utils` - This holds all of our utility or helper functions that can be used across different parts of the project, in our case it's nodeMailer

- #### `server.js` - Defines npm behaviors and packages for the client

#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README

#### `.gitignore` - Tells git which files to ignore

#### `README` - This file

## Installation

Since this project will hold both the client application and the server application there will be node modules in two different places.
First make sure to run `npm install` from the root.
Then run `npm install` in `/client`
Then create `.env` file in `/` where it contains this following structure:

```text
JWT_SECRET=<your_secret>
MONGO_PASSWORD=<mongodb_password>
MONGO_USER=<mongodb_user>
MONGO_URL=<mongodb_url>
EMAIL=<email_for_nodemailer>
PASSWORD=<password_for_nodemailer>
```

---

If I'm missing something, please let me know

---

## Available Scripts

In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script server`

Runs just the server in development mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn how to setup a local MongoDB instance for testing, check out how to [Connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).
