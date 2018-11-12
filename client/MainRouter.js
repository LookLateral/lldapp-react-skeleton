import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/components/Menu'
import IconSandwich from './core/components/IconSandwich'
import Sidebar from './core/components/Sidebar'
import Provenance from './core/Provenance'
import Fimart from './core/Fimart'

class MainRouter extends Component {
	
  constructor(props) {
      super(props)
      this.state = {
		sidebarOpened: false,
      }
      this.handleSandwich = this.handleSandwich.bind(this)
	}
	
  // Removes the server-side injected CSS when React component mounts
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }
  
  handleSandwich () {
	  this.setState({
		sidebarOpened: !this.state.sidebarOpened
	  })	
  }

  render() {
    return (<div>
      
	  <Menu/>
	  
	  <IconSandwich isOpen={this.state.sidebarOpened} onClick={() => this.handleSandwich() }/>
      
	  <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
		<Route path="/provenance" component={Provenance}/>
        <Route path="/fimart" component={Fimart}/>
      </Switch>
	  
	  <Sidebar isOpen={this.state.sidebarOpened} />
    
	</div>)
  }
}

export default MainRouter