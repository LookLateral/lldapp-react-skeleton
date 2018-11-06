# ALL OF THE CODE IS COMPLETE. BELOW IS ONLY AN EXPLANATION OF HOW THE CODE WORKS; DO NOT TRY TO RECREATE THE CODE JUST CLONE IT AND BEGIN TO ADD YOUR COMPONENTS

### Clone the repo and run in development like so:
Install dependencies with npm
```
npm i
```
Run app in development
```
npm run development
```
### View app on localhost:3000

# LL Dapp MERN skeleton
A MERN skeleton for use in the LL decentralized application

*	Home page: A view that renders at the root URL to welcome users to the web application
*	User list page: A view that fetches and shows a list of all the users in the database, and also links to individual user profiles
*	Sign-up page: A view with a form for user sign-up, allowing new users to create a user account and redirecting them to a sign in page when successfully created
*	Sign-in page: A view with a sign-in form that allows existing users to sign in so they have access to protected views and actions
*	Profile page: A component that fetches and displays an individual user's information, is only accessible by signed-in users, and also contains edit and delete options, which are visible only if the signed-in user is looking at their own profile
*	Edit profile page: A form that fetches the user's information in the form, allows them to edit the information, and is accessible only if the logged-in user is trying to edit their own profile
*	Delete user component: An option that allows the signed-in user to delete only their own profile after confirming their intent
*	Menu navigation bar: A component that lists all the available and relevant views to the user, and also helps to indicate the user's current location in the application

The following React component tree diagram shows all the React components we will develop to build out the views for this base application:

![alt text](https://s3-us-west-2.amazonaws.com/lldappimages/reactskeletontree.png "MERN Skeleton")

MainRouter will be the root React component that contains all the other custom React views in the application. 
Home, Signup, Signin, Users, Profile, and EditProfile will render at individual routes declared with React Router, 
whereas the Menu component will render across all these views, and DeleteUser will be a part of the Profile view.

# Implementing React views
A functional frontend should integrate React components with the backend API and allow users to navigate seamlessly within 
the application based on authorization. To demonstrate how to implement a functional frontend view for this MERN skeleton, 
we will start by detailing how to render the home page component at the root route, then cover the backend API and user auth integration, 
before highlighting the unique aspects of implementing the remaining view components.

# Rendering a home page
The process of implementing and rendering a working Home component at the root route will also expose the basic structure of the 
frontend code in the skeleton. We will start with the top-level entry component that houses the whole React app and renders the main 
router component that links all the React components in the application.

The client/main.js file in the client folder will be the entry point to render the complete React app. In this code, we import the root 
or top-level React component that will contain the complete frontend and render it to the div element with the ID 'root' specified in the 
HTML document in template.js.

### mern-skeleton/client/main.js:
```
import React from 'react'
import { render } from 'react-dom'
import App from './App'

render(<App/>, document.getElementById('root'))
```
# Root React component
The top-level React component that will contain all the components for the application's frontend is defined in the client/App.js file. 
In this file, we configure the React app to render the view components with a customized Material-UI theme, enable frontend routing, 
and ensure that React Hot Loader can instantly load changes as we develop the components.

The Material-UI theme can be easily customized using the MuiThemeProvider component, and by configuring custom values to theme 
variables in createMuiTheme().

### mern-skeleton/client/App.js:
```
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {indigo, pink} from 'material-ui/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#757de8',
    main: '#3f51b5',
    dark: '#002984',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff79b0',
    main: '#ff4081',
    dark: '#c60055',
    contrastText: '#000',
  },
    openTitle: indigo['400'],
    protectedTitle: pink['400'],
    type: 'light'
  }
})
```
For the skeleton, we only apply minimal customization by setting some color values to be used in the UI. The theme variables generated 
here will be passed to, and available in, all the components we build.

# Wrapping the root component with MUI theme and BrowserRouter
The custom React components that we create to make up the user interface will be accessed with frontend routes specified in the 
MainRouter component. Essentially, this component houses all the custom views developed for the application. When defining the 
root component in App.js, we wrap the MainRouter component with the MuiThemeProvider to give it access to the Material-UI theme, 
and BrowserRouter to enable frontend routing with React Router. The custom theme variables defined previously are passed as a prop 
to the MuiThemeProvider, making the theme available in all our custom React components.

### mern-skeleton/client/App.js:
```
import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)
```
# Marking the root component as hot-exported
The last line of code in App.js to export the App component uses the hot module from react-hot-loader to mark the root component as hot. This will enable live reloading of the React components during development.

### mern-skeleton/client/App.js:
```
import { hot } from 'react-hot-loader'
...
export default hot(module)(App)
```
For our MERN applications, we won't have to change the main.js and App.js code all that much after this point, and we can continue 
building out the rest of the React app by injecting new components in the MainRouter component.

# Adding a home route to MainRouter
The MainRouter.js code will help render our custom React components with respect to routes or locations in the application. In this 
first version, we will only add the root route to render the Home component.

### mern-skeleton/client/MainRouter.js:
```
import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
class MainRouter extends Component {
  render() {
    return (<div>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>)
  }
}
export default MainRouter
```
As we develop more view components, we will update the MainRouter to add routes for the new components inside the Switch component.
The Home component and other view components that will be rendered in the browser for the user to interact with will follow a common 
code structure containing the following parts in the given order.

# Imports
The component file will start with imports from React, Material-UI, React Router modules, images, CSS, API fetch, and auth helpers 
from our code as required by the specific component. For example, for the Home component code in Home.js, we use the following imports.

### mern-skeleton/client/core/Home.js:
```
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import picassoselfImg from './../assets/images/picassoself.jpg'
```
The image file is kept in the client/assets/images/ folder and imported/added to the Home component.

# Style declarations
After the imports, we will define CSS styles utilizing the Material-UI theme variables as required to style the elements in the 
component. For the Home component in Home.js, we have the following styles.

### mern-skeleton/client/core/Home.js:
```
const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing.unit * 5
  },
  title: {
    padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px 
    ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 330
  }
})
```
The JSS style objects defined here will be injected into the component and used to style the elements in the component, as shown in the 
following Home component definition.

# Component definition
In the component definition, we will compose the content and behavior of the component. The Home component will contain a Material-UI 
Card with a headline, an image, and a caption, all styled with the classes defined earlier and passed in as props.

### mern-skeleton/client/core/Home.js:
```
class Home extends Component {
  render() {
    const {classes} = this.props 
    return (
      <div>
        <Card className={classes.card}>
          <Typography type="headline" component="h2" className=
          {classes.title}>
            Home Page
          </Typography>
          <CardMedia className={classes.media} image={seashellImg} 
          title="Unicorn Shells"/>
          <CardContent>
            <Typography type="body1" component="p">
              Welcome to the Mern Skeleton home page
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}
```
# PropTypes validation
To validate the required injection of style declarations as props to the component, we add the PropTypes requirement validator to the 
defined component.

### mern-skeleton/client/core/Home.js:
```
Home.propTypes = {
  classes: PropTypes.object.isRequired
}
```
# Export component
Finally, in the last line of code in the component file, we will export the component with the defined styles passed in using 
withStyles from Material-UI. Using withStyles like this creates a Higher-order component (HOC) that has access to the defined style 
objects as props.

### mern-skeleton/client/core/Home.js:
```
export default withStyles(styles)(Home)
```
The exported component can now be used for composition within other components, as we did with this Home component in a route in the 
MainRouter component discussed earlier.

The other view components to be implemented in our application will use the same structure.

# Bundling image assets
The static image file that we imported into the Home component view must also be included in the bundle with the rest of the compiled 
JS code so that the code can access and load it. To enable this, we need to update the Webpack configuration files to add a module rule 
to load, bundle, and emit image files to the output directory, which contains the compiled frontend and backend code.

Update the webpack.config.client.js, webpack.config.server.js, and webpack.config.client.production.js files to add the following 
module rule after the use of babel-loader:
```
[ …
    {
       test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
       use: 'file-loader'
    }
]
```
# Backend API integration
Users should be able to use the frontend views to fetch and modify user data in the database based on authentication and authorization. 
To implement these functionalities, the React components will access the API endpoints exposed by the backend using the Fetch API.

# Fetch for User CRUD
In the client/user/api-user.js file, we will add methods for accessing each of the user CRUD API endpoints, which the React components 
can use to exchange user data with the server and database as required.

# Creating a user
The create method will take user data from the view component, use fetch to make a POST call to create a new user in the backend, and 
finally return the response from the server to the component as a promise.

### mern-skeleton/client/user/api-user.js:
```
const create = (user) => {
  return fetch('/api/users/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
}
```
# Listing users
The list method will use fetch to make a GET call to retrieve all the users in the database, and then return the response from the 
server as a promise to the component.

### mern-skeleton/client/user/api-user.js:
```
const list = () => {
  return fetch('/api/users/', {
    method: 'GET',
  }).then(response => {
    return response.json()
  }).catch((err) => console.log(err))
}
```
# Reading a user profile
The read method will use fetch to make a GET call to retrieve a specific user by ID. Since this is a protected route, besides passing 
the user ID as a parameter, the requesting component must also provide valid credentials, which in this case will be a valid JWT 
received after successful sign-in.

### mern-skeleton/client/user/api-user.js:
```
const read = (params, credentials) => {
  return fetch('/api/users/' + params.userId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}
```
The JWT is attached to the GET fetch call in the Authorization header using the Bearer scheme, and then the response from the server is 
returned to the component in a promise.

# Updating a user's data
The update method will take changed user data from the view component for a specific user, then use fetch to make a PUT call to update 
the existing user in the backend. This is also a protected route that will require a valid JWT as credential.

### mern-skeleton/client/user/api-user.js:
```
const update = (params, credentials, user) => {
  return fetch('/api/users/' + params.userId, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify(user)
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}
```
# Deleting a user
The remove method will allow the view component to delete a specific user from the database, using fetch to make a DELETE call. This, 
again, is a protected route that will require a valid JWT as a credential, similar to the read and update methods. The response from 
the server to the delete request will be returned to the component as a promise.

### mern-skeleton/client/user/api-user.js:
```
const remove = (params, credentials) => {
  return fetch('/api/users/' + params.userId, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  }) 
}
```
Finally, we export the user API helper methods to be imported and used by the React components as required.

### mern-skeleton/client/user/api-user.js:
```
export { create, list, read, update, remove }
```

# Fetch for auth API
In order to integrate the auth API endpoints from the server with the frontend React components, we will add methods for fetching 
sign-in and sign-out API endpoints in the client/auth/api-auth.js file.


# Sign-in
The signin method will take user sign-in data from the view component, then use fetch to make a POST call to verify the user with the 
backend. The response from the server will be returned to the component in a promise, which may contain the JWT if sign-in was 
successful.

### mern-skeleton/client/user/api-auth.js:
```
const signin = (user) => {
  return fetch('/auth/signin/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(user)
    })
    .then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
}
```

# Sign-out
The signout method will use fetch to make a GET call to the signout API endpoint on the server.

### mern-skeleton/client/user/api-auth.js:
```
const signout = () => {
  return fetch('/auth/signout/', {
    method: 'GET',
  }).then(response => {
      return response.json()
  }).catch((err) => console.log(err))
}
```
At the end of the api-auth.js file, export the signin and signout methods.

### mern-skeleton/client/user/api-auth.js:
```
export { signin, signout }
```
With these API fetch methods, the React frontend has complete access to the endpoints available in the backend.

# Auth in the frontend
Implementing authentication with JWT relinquishes responsibility to the client side to manage and store user auth state. To this end, 
we need to write code that will allow the client-side to store the JWT received from the server on successful sign-in, make it 
available when accessing protected routes, delete or invalidate the token when the user signs out, and also restrict access to views 
and components on the frontend based on the user auth state.

Using examples of auth workflow from the React Router documentation, we create helper methods to manage auth state across the 
components, and also use a custom PrivateRoute component to add protected routes to the frontend.


# Managing auth state

In client/auth/auth-helper.js, we will define the following helper methods to store and retrieve JWT credentials from client-side sessionStorage, and also clear out the sessionStorage on user sign-out:

### authenticate(jwt, cb): Save credentials on successful sign-in:
```
authenticate(jwt, cb) {
    if(typeof window !== "undefined")
        sessionStorage.setItem('jwt', JSON.stringify(jwt))
    cb()
}
```
### isAuthenticated(): Retrieve credentials if signed-in:
```
isAuthenticated() {
    if (typeof window == "undefined")
      return false

    if (sessionStorage.getItem('jwt'))
      return JSON.parse(sessionStorage.getItem('jwt'))
    else
      return false
}
```
### signout(cb): Delete credentials and sign out:
```
signout(cb) {
      if(typeof window !== "undefined")
        sessionStorage.removeItem('jwt')
      cb()
      signout().then((data) => {
          document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 
          UTC; path=/;"
      })
}
```
Using the methods defined here, the React components we build will be able to check and manage user auth state to restrict access in 
the frontend, as demonstrated in the following with the custom PrivateRoute.

# PrivateRoute component
The client/auth/PrivateRoute.js defines the PrivateRoute component as shown in an auth flow example from 
[React Training](https://reacttraining.com/react-router/web/example/auth-workflow) in the React Router documentation. It will allow us to declare protected routes for the frontend 
to restrict view access based on user auth.

### mern-skeleton/client/auth/PrivateRoute.js:
```
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './auth-helper'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/signin',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute
```
Components to be rendered in this PrivateRoute will only load when the user is authenticated, otherwise the user will be redirected to 
the Signin component.

With the backend APIs integrated, and auth management helper methods ready for use in the components, we can start building the 
remaining view components.


# User and auth components
The React components described in this section complete the interactive features defined for the skeleton by allowing users to 
view, create, and modify user data stored in the database with respect to auth restrictions. For each of the following components, 
we will go over the unique aspects of each component, and how to add the component to the application in the MainRouter.


# Users component
The Users component in client/user/Users.js, shows the names of all the users fetched from the database, and links each name to the 
user profile. This component can be viewed by any visitor to the application and will render at the path '/users':

In the component definition, we first initialize the state with an empty array of users.

### mern-skeleton/client/user/Users.js:
```
class Users extends Component {
  state = { users: [] }
...
```
Next, in componentDidMount, we use the list method from the api-user.js helper methods, to fetch the user list from the backend, 
and load the user data into the component by updating the state.

### mern-skeleton/client/user/Users.js:
```
  componentDidMount = () => {
    list().then((data) => {
      if (data.error)
        console.log(data.error)
      else
        this.setState({users: data})
    })
  }
```
The render function contains the actual view content of the Users component, and is composed with Material-UI components such as 
Paper, List, and ListItems. The elements are styled with the CSS defined and passed in as props.

### mern-skeleton/client/user/Users.js:
```
render() {
    const {classes} = this.props
    return (
      <Paper className={classes.root} elevation={4}>
        <Typography type="title" className={classes.title}>
          All Users
        </Typography>
        <List dense>
          {this.state.users.map(function(item, i) {
              return <Link to={"/user/" + item._id} key={i}>
                <ListItem button="button">
                  <ListItemAvatar>
                    <Avatar>
                      <Person/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.name}/>
                  <ListItemSecondaryAction>
                    <IconButton>
                      <ArrowForward/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </Link>
            })}
        </List>
      </Paper>
    )
  }
```
To generate each list item, we iterate through the array of users in the state using the map function.

To add this Users component to the React application, we need to update the MainRouter component with a Route that renders this 
component at the '/users' path. Add the Route inside the Switch component after the Home route.

### mern-skeleton/client/MainRouter.js:
```
<Route path="/users" component={Users}/>
```
# Signup component 
The Signup component in client/user/Signup.js, presents a form with name, email, and password fields to the user for sign-up at 
the '/signup' path:

In the component definition, we first initialize the state with empty input field values, empty error message, and set the dialog open variable to false.

### mern-skeleton/client/user/Signup.js:
```
  constructor() {
    state = { name: '', password: '', email: '', open: false, error: '' }
  ...
```
We also define two handler functions to be called when the input value changes or the submit button is clicked. The handleChange 
function takes the new value entered in the input field and sets it to state.

### mern-skeleton/client/user/Signup.js:
```
handleChange = name => event => {
    this.setState({[name]: event.target.value})
}
```
The clickSubmit function is called when the form is submitted. It takes the input values from state and calls the create fetch method 
to sign up the user with the backend. Then, depending on the response from the server, either an error message is shown or a success 
dialog is shown.

### mern-skeleton/client/user/Signup.js:
```
  clickSubmit = () => {
    const user = {
      name: this.state.name || undefined,
      email: this.state.email || undefined,
      password: this.state.password || undefined
    } 
    create(user).then((data) => {
      if (data.error)
        this.setState({error: data.error})
      else
        this.setState({error: '', open: true})
    })
  }
```
In the render function we compose and style the form components in the Sign-up view using components such as TextField from Material-UI.

### mern-skeleton/client/user/Signup.js:
```
  render() {
    const {classes} = this.props
    return (<div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h2" 
                      className={classes.title}>
            Sign Up
          </Typography>
          <TextField id="name" label="Name" 
          className={classes.textField} 
                     value={this.state.name} 
                     onChange={this.handleChange('name')} 
                     margin="normal"/> <br/>
          <TextField id="email" type="email" label="Email" 
                     className={classes.textField} value=
                     {this.state.email} 
                     onChange={this.handleChange('email')}
                     margin="normal"/><br/>
          <TextField id="password" type="password"
          label="Password" className={classes.textField} 
                     value={this.state.password} 
                     onChange={this.handleChange('password')} 
                     margin="normal"/><br/> 
          {this.state.error && ( <Typography component="p" 
           color="error">
              <Icon color="error" 
              className={classes.error}>error</Icon>
              {this.state.error}</Typography>)}
        </CardContent>
        <CardActions>
          <Button color="primary" raised="raised"
                  onClick={this.clickSubmit} 
           className={classes.submit}>Submit</Button>
        </CardActions>
      </Card>
      <Dialog> ... </Dialog>
    </div>)
  }
```
The render also contains an error message block along with a Dialog component that is conditionally rendered depending on the sign 
up response from the server. The Dialog component in Signup.js is composed as follows.

### mern-skeleton/client/user/Signup.js:
```
<Dialog open={this.state.open} disableBackdropClick={true}>
   <DialogTitle>New Account</DialogTitle>
   <DialogContent>
      <DialogContentText>
         New account successfully created.
      </DialogContentText>
   </DialogContent>
   <DialogActions>
      <Link to="/signin">
         <Button color="primary" autoFocus="autoFocus" variant="raised">
            Sign In

         </Button>
      </Link>
   </DialogActions>
</Dialog>
```

On successful account creation, the user is given confirmation, and asked to sign in using this Dialog component, which links to the 
Signin component.

To add the Signup component to the app, add the following Route to the MainRouter in the Switch component.

### mern-skeleton/client/MainRouter.js:
```
<Route path="/signup" component={Signup}/>
```
This will render the Signup view at '/signup'.


# Signin component
The Signin component in client/auth/Signin.js is also a form with only email and password fields for signing in. This component is 
quite similar to the Signup component and will render at the '/signin' path. The key difference is in the implementation of redirection 
after successful sign-in and storing of the received JWT.

For redirection, we will use the Redirect component from React Router. First, initialize a redirectToReferrer value to false in the 
state with the other fields:

###mern-skeleton/client/auth/Signin.js:
```
class Signin extends Component {
  state = { email: '', password: '', error: '', redirectToReferrer: false } 
...
```
The redirectToReferrer should be set to true when the user successfully signs in after submitting the form and the received JWT is 
stored in the sessionStorage. To store the JWT and redirect afterwords, we will call the authenticate() method defined in 
auth-helper.js. This code will go in the clickSubmit() function to be called on form submit.

### mern-skeleton/client/auth/Signin.js:
```
clickSubmit = () => {
    const user = {
      email: this.state.email || undefined,
      password: this.state.password || undefined
    }
    signin(user).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        auth.authenticate(data, () => {
          this.setState({redirectToReferrer: true})
        })
      }
    })
}
```
The redirection will happen conditionally based on the redirectToReferrer value with the Redirect component in the render function. 
Add the redirect code in the render function before the return as follows:

### mern-skeleton/client/auth/Signin.js:
```
render() {
    const {classes} = this.props
    const {from} = this.props.location.state || {
      from: {pathname: '/' }
    } 
    const {redirectToReferrer} = this.state
    if (redirectToReferrer)
      return (<Redirect to={from}/>)
    return (...)
  }
}
```
The Redirect component, if rendered, will take the app to the last location or to the Home component at the root. 

The return will contain the form elements similar to that of Signup, with just email and password fields, a conditional error message, 
and the submit button.

To add the Signin component to the app, add the following Route to the MainRouter in the Switch component.

### mern-skeleton/client/MainRouter.js:
```
<Route path="/signin" component={Signin}/>
```
This will render the Signin component at "/signin".

# Profile component
The Profile component in client/user/Profile.js shows a single user's information in the view at the '/user/:userId' path, 
where the userId parameter represents the ID of the specific user.

This profile information can be fetched from the server only if the user is signed in, and to verify this, the component has to provide 
the JWT to the read fetch call, otherwise, the user should be redirected to the Sign In view.

In the Profile component definition, we first need to initialize the state with an empty user and set redirectToSignin to false.

### mern-skeleton/client/user/Profile.js:
```
class Profile extends Component {
  constructor({match}) {
    super()
    this.state = { user: '', redirectToSignin: false }
    this.match = match 
  } ...
```
We also need to get access to the match props passed by the Route component, which will contain :userId param value and can be accessed 
as this.match.params.userId when the component mounts.

The Profile component should fetch user information and render it when the userId parameter changes in the route. However, when the app 
goes from one profile view to the other, and it is just a param change in the route path, the React component does not re-mount. Rather, it passes the new props in componentWillReceiveProps. In order to make sure the component loads the relevant user's information when the route param updates, we will place the read fetch call in the init() function, which can then be called in both componentDidMount and componentWillReceiveProps.

### mern-skeleton/client/user/Profile.js:
```
init = (userId) => {
    const jwt = auth.isAuthenticated()
    read({
      userId: userId
    }, {t: jwt.token}).then((data) => {
      if (data.error)
        this.setState({redirectToSignin: true})
      else
        this.setState({user: data})
    })
}
```
The init(userId) function takes the userId value, and calls the read user fetch method. Since this method also requires credentials to 
authorize the signed-in user, the JWT is retrieved from sessionStorage using the isAuthenticated method from auth-helper.js. Once the 
server responds, either the state is updated with the user information or the view is redirected to the Sign-in view.

This init function is called in componentDidMount and componentWillReceiveProps with the relevant userId value passed in as a parameter 
so that the correct user information is fetched and loaded in the component.

### mern-skeleton/client/user/Profile.js:
```
componentDidMount = () => {
  this.init(this.match.params.userId)
}
componentWillReceiveProps = (props) => {
  this.init(props.match.params.userId)
}
```
In the render function, we set up the conditional redirect to Signin view, and return the content of the Profile view:

### mern-skeleton/client/user/Profile.js
```
render() {
   const {classes} = this.props
   const redirectToSignin = this.state.redirectToSignin
   if (redirectToSignin)
     return <Redirect to='/signin'/>
   return (...)
 }
```
The render function will return the Profile view with the following elements if the user currently signed-in is viewing another user's 
profile.

### mern-skeleton/client/user/Profile.js:
```
<div>
  <Paper className={classes.root} elevation={4}>
    <Typography type="title" className={classes.title}> Profile </Typography>
      <List dense>
        <ListItem>
          <ListItemAvatar>
             <Avatar>
               <Person/>
             </Avatar>
          </ListItemAvatar>
          <ListItemText primary={this.state.user.name} 
                       secondary={this.state.user.email}/>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemText primary={"Joined: " + 
              (new Date(this.state.user.created)).toDateString()}/>
        </ListItem>
      </List>
  </Paper>
</div>
```
However, if the user currently signed-in is viewing their own profile, they will be able to see an edit and delete option in the 
Profile component.

To implement this feature, in the first ListItem component in the Profile, we add a ListItemSecondaryAction component containing the Edit 
button and a DeleteUser component, which will render conditionally based on whether the current user is viewing their own profile.

### mern-skeleton/client/user/Profile.js:
```
{ auth.isAuthenticated().user && auth.isAuthenticated().user._id == this.state.user._id &&
    (<ListItemSecondaryAction>
       <Link to={"/user/edit/" + this.state.user._id}>
         <IconButton color="primary">
           <Edit/>
         </IconButton>
       </Link>
       <DeleteUser userId={this.state.user._id}/>
    </ListItemSecondaryAction>)}
```
The Edit button will route to the EditProfile component, and the custom DeleteUser component used here will handle the delete operation 
with the userId passed to it as a prop.

To add the Profile component to the app, add the Route to the MainRouter in the Switch component.

### mern-skeleton/client/MainRouter.js:
```
<Route path="/user/:userId" component={Profile}/>
```

# EditProfile component
The EditProfile component in client/user/EditProfile.js has similarities in implementation with both the Signup and Profile components. 
It will allow the authorized user to edit their own profile information.

Upon load at '/user/edit/:userId', the component will fetch the user's information with ID after verifying JWT for auth, then load the 
form with the received user information. The form will allow the user to edit and submit only the changed information to the update 
fetch call, and on successful update, redirect the user to the Profile view with updated information.

EditProfile will load the user information the same way as in the Profile component, by fetching with read in componentDidMount using 
the userId param from this.match.params, and credentials from auth.isAuthenticated. The form view will have the same elements as the 
Signup component with input values updated in the state on change.

On form submit, the component will call the update fetch method with the userId, JWT, and updated user data.

### mern-skeleton/client/user/EditProfile.js:
```
clickSubmit = () => {
    const jwt = auth.isAuthenticated()
    const user = {
      name: this.state.name || undefined,
      email: this.state.email || undefined,
      password: this.state.password || undefined
    }
    update({
      userId: this.match.params.userId
    }, {
      t: jwt.token
    }, user).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        this.setState({'userId': data._id, 'redirectToProfile': true})
      }
    })
}
```
Depending on the response from the server, the user will either see an error message or be redirected to the updated Profile page with 
the following Redirect component in the render function.

### mern-skeleton/client/user/EditProfile.js:
```
if (this.state.redirectToProfile)
   return (<Redirect to={'/user/' + this.state.userId}/>)
```
To add the EditProfile component to the app, we will use a PrivateRoute this time, to restrict the component from loading at all if the 
user is not signed in. The order of placement in MainRouter will also be important.

### mern-skeleton/client/MainRouter.js:
```
<Switch>
  ...
  <PrivateRoute path="/user/edit/:userId" component={EditProfile}/><>
  <Route path="/user/:userId" component={Profile}/>
</Switch>
```
The route with path '/user/edit/:userId' needs to be placed before the route with path '/user/:userId', so that the edit path is 
matched first exclusively in the Switch component when this route is requested, and not confused with the Profile route.


# DeleteUser component
The DeleteUser component in client/user/DeleteUser.js is basically a button that we will add to the Profile view, which when clicked 
opens a Dialog component asking the user to confirm the delete action.

The component first initializes the state with open set to false for the Dialog component, and redirect also set to false so it isn't 
rendered first.

### mern-skeleton/client/user/DeleteUser.js:
```
class DeleteUser extends Component {
  state = { redirect: false, open: false } 
...
```
Next, we need handler methods to open and close the dialog button. The dialog is opened when the user clicks the delete button.

### mern-skeleton/client/user/DeleteUser.js:
```
clickButton = () => {
    this.setState({open: true})
}
```
The dialog is closed when the user clicks cancel on the dialog.

### mern-skeleton/client/user/DeleteUser.js:
```
  handleRequestClose = () => {
    this.setState({open: false})
  }
```
The component will have access to the userId passed in as a prop from the Profile component, which is needed to call the remove fetch 
method along with the JWT, after the user confirms the delete action in the dialog.

### mern-skeleton/client/user/DeleteUser.js:
```
deleteAccount = () => {
    const jwt = auth.isAuthenticated() 
    remove({
      userId: this.props.userId
    }, {t: jwt.token}).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        auth.signout(() => console.log('deleted'))
        this.setState({redirect: true})
      }
    }) 
  }
```
On confirmation, the deleteAccount function calls the remove fetch method with the userId from props and JWT from isAuthenticated. 
On successful deletion in the server, the user will be signed out and redirected to the Home view.

The render function contains the conditional Redirect to Home view and returns the DeleteUser component elements, a DeleteIcon button 
and the confirmation Dialog:

### mern-skeleton/client/user/DeleteUser.js:
```
render() {
    const redirect = this.state.redirect
    if (redirect) {
      return <Redirect to='/'/>
    }
    return (<span>
      <IconButton aria-label="Delete" onClick={this.clickButton} 
      color="secondary">
        <DeleteIcon/>
      </IconButton>
      <Dialog open={this.state.open} onClose={this.handleRequestClose}>
        <DialogTitle>{"Delete Account"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Confirm to delete your account.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleRequestClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.deleteAccount} color="secondary" 
          autoFocus="autoFocus">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </span>)
}
```
DeleteUser takes the userId as a prop to be used in the delete fetch call, so we add a propType check for the required prop userId.

### mern-skeleton/client/user/DeleteUser.js:
```
DeleteUser.propTypes = {
  userId: PropTypes.string.isRequired
}
```
As we are using the DeleteUser component in the Profile component, it gets added to the application view when Profile is added in 
MainRouter.

# Menu component
The Menu component will function as a navigation bar across the frontend application by providing links to all the available views, 
and also be indicating the current location in the application.

To implement these navigation bar functionalities, we will use the HOC withRouter from React Router to get access to the history 
object's properties. The following code in the Menu component adds just the title, the Home icon linked to the root Route, and Users 
button linked to the '/users' route.

### mern-skeleton/client/core/Menu.js:
```
const Menu = withRouter(({history}) => (<div>
  <AppBar position="static">
    <Toolbar>
      <Typography type="title" color="inherit">
        MERN Skeleton
      </Typography>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(history, "/")}>
          <HomeIcon/>
        </IconButton>
      </Link>
      <Link to="/users">
        <Button style={isActive(history, "/users")}>Users</Button>
      </Link>
    </Toolbar>
  </AppBar>
</div>))
```
To indicate the current location of the application on the Menu, we will highlight the link that matches with the current location 
path by changing the color conditionally.

### mern-skeleton/client/core/Menu.js:
```
const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#ff4081'}
  else
    return {color: '#ffffff'}
}
```
The isActive function is used to apply color to the buttons in the Menu as follows:
```
style={isActive(history, "/users")}
```
The remaining links such as SIGN IN, SIGN UP, MY PROFILE, and SIGN OUT will show up on the Menu based on whether the user is signed in 
or not.

For example, the links to SIGN UP and SIGN IN should only show on the menu when the user is not signed in. So we need to add it to the 
Menu component after the Users button with a condition.

### mern-skeleton/client/core/Menu.js:
```
{!auth.isAuthenticated() && (<span>
    <Link to="/signup">
       <Button style={isActive(history, "/signup")}> Sign Up </Button>
    </Link>
    <Link to="/signin">
       <Button style={isActive(history, "/signin")}> Sign In </Button>
    </Link>
</span>)}
```
Similarly, the link to MY PROFILE and the SIGN OUT button should only show on the menu when the user is signed in, and should be 
added to the Menu component with this condition check.

### mern-skeleton/client/core/Menu.js:
```
{auth.isAuthenticated() && (<span>
   <Link to={"/user/" + auth.isAuthenticated().user._id}>
      <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>
           My Profile 
      </Button>
   </Link>
   <Button color="inherit" 
           onClick={() => { auth.signout(() => history.push('/')) }}>
        Sign out
   </Button>
 </span>)}
```
The MY PROFILE button uses the signed-in user's information to link to the user's own profile, and the SIGN OUT button calls the 
auth.signout() method when clicked.

To have the Menu navigation bar present in all the views, we need to add it to the MainRouter before all the other routes, and outside the Switch component.

mern-skeleton/client/MainRouter.js:

    <Menu/>
    <Switch>
    …
    </Switch>

This will make the Menu component render on top of all the other components when the component is accessed at a route.

The skeleton frontend is complete with all components necessary to enable a user to sign up, view, and modify user data on the backend 
with consideration to authentication and authorization restrictions. However, it is still not possible to visit the frontend routes 
directly in the browser address bar, and can only be accessed when linked from within the frontend view. To enable this functionality 
in the skeleton application, we need to implement basic server-side rendering.

The skeleton MERN application explained here is a completely functioning MERN web application with basic user features. We can 
extend the code in this skeleton to add a variety of features for our application.

![alt text](https://s3-us-west-2.amazonaws.com/lldappimages/marketplace_platform.png "LL Dapp Marketplace")
