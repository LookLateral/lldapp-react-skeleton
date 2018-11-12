import React, {Component} from 'react'
import { render } from 'react-dom'
import auth from './../../auth/auth-helper'
import { Link /*, withRouter*/ } from 'react-router-dom'
import Button from 'material-ui/Button'
import Search from 'material-ui-icons/Search'
import Person from 'material-ui-icons/Person'
import Notifications from 'material-ui-icons/Notifications'
import Input from 'material-ui-icons/Input'
import PowerSettingsNew from 'material-ui-icons/PowerSettingsNew'

const styles = {
	fastLinks: { textAlign: 'center', marginTop: '20px', },
	links: {
		textDecoration: 'none',
    	cursor: 'pointer',
    	color: 'white',
	},
	icons: { margin: '0px 8px', fontSize: '30px', },
}

// NEED HISTORY IN HERE
//const SidebarFastLink = withRouter(({history}) => {
class SidebarFastLink extends Component {            
    render() {
		return (
				<div>
					{ 
						 auth.isAuthenticated() ?                      
							<div style={styles.fastLinks}>               
								<Link to={"/user/" + auth.isAuthenticated().user._id} style={styles.links}>
									<Person style={styles.icons} />
								</Link>
								<Link to="/notification" style={styles.links}>
									<Notifications style={styles.icons}/>
								</Link>
								<Link to="/search" style={styles.links}>
									<Search style={styles.icons} />
								</Link>					
								<Button color="inherit" onClick={() => {
								  auth.signout(/*() => history.push('/')*/)
								}} style={styles.links}>
									<PowerSettingsNew  style={styles.icons} />
								</Button>
							</div>               
						:
							<div style={styles.fastLinks}>	
								<Link to="/signin" style={styles.links}>
									<Input style={styles.icons} />
								</Link>
								<Link to="/search" style={styles.links}>
									<Search style={styles.icons} />
								</Link>
							</div>
					}
				</div>
		)
	}
}
export default (SidebarFastLink) 
