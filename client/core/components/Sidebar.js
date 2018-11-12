import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types'
import {Link /*, withRouter */} from 'react-router-dom'

import SidebarUserDetails from './SidebarUserDetails'
import SidebarFastLinks from './SidebarFastLinks'
import SidebarLinkList from './SidebarLinkList'
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

const styles = {
	drawer: {
	  top: '12vh',
	  height: '86vh',
	  zIndex: 1200,
	  position: 'fixed',
	  backgroundColor: '#3f51b5',
	  width: '240px',
	  right: '8px',
	  padding: '10px',
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
	  },
	divider: {
		backgroundColor:'#fff',
		margin: '15px 0px',
		height: '2px',
	}
}

class Sidebar extends Component {            
    render() {
		const { classes } = this.props;
		return (	
			
			<Drawer variant="persistent" anchor="right" open={this.props.isOpen} classes={{ paper: classes.drawer }}>         		 
				<div>				  
				  <SidebarUserDetails />				  
				  <Divider style={ styles.divider } />
                  <SidebarFastLinks  />				  
				  <Divider style={ styles.divider } />
                  <SidebarLinkList history={false/* this.props.history */} />
				</div>									
			</Drawer>			       		
    	)
	}  
}


Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Sidebar) 
