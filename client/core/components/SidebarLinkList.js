import React from 'react'
import auth from './../../auth/auth-helper'
import { Link } from 'react-router-dom'
//import SidebarSingleLink from './SidebarSingleLink'
import VerifiedUser from 'material-ui-icons/VerifiedUser'
import Home from 'material-ui-icons/Home'
import Palette from 'material-ui-icons/Palette'
import AccountBox from 'material-ui-icons/AccountBox'
import Settings from 'material-ui-icons/Settings'
import Fingerprint from 'material-ui-icons/Fingerprint'
import ChromeReaderMode from 'material-ui-icons/ChromeReaderMode'
import Gavel from 'material-ui-icons/Gavel'

const styles = {
	linkList: { marginTop: '0px', },
	singleLink: {
		height: '30px',
	    borderTop: '1px thin #555',
    	textAlign: 'left',
    	padding: '10px 2px 0px 15px',
	},
	link: {
		textDecoration: 'none',
    	color: 'white',
    	fontSize: '14px',
		textTransform: 'uppercase',
	},
	icon: { marginRight: '10px', fontSize: '16px', },
}

/*const SidebarLinkList = () => (

    <div className="sidebar-link-list">
        {
            auth.isAuthenticated() ?
                <SidebarSingleLink 
                        name="SisAdmin Manager Art"
                        linkto="/admin-dashboard"
                        icon="UserShield"
                    />
            :
                null
        }
        {
            auth.isAuthenticated() ?
                <div>
                    <SidebarSingleLink 
                        name="Member Dashboard"
                        linkto="/home"
                        icon="Home"
                    />
                <SidebarSingleLink 
                        name="Discover Art"
                        linkto="/provenance"
                        icon="Palette"
                    />               
                <SidebarSingleLink 
                        name="Profile"
                        linkto="/dashboard"
                        icon="AddressCard"
                    />
                </div>
            :
                null 
        }
        <SidebarSingleLink 
                name="How it Works"
                linkto="/how-it-works"
                icon="Cogs"
            />
        <SidebarSingleLink 
                name="About us"
                linkto="/provenance"
                icon="Fingerprint"
            />        
        <SidebarSingleLink 
                name="Terms of service"
                linkto="/terms-of-service"
                icon="FileSignature"
            />       
        <SidebarSingleLink 
                name="Privacy Policy"
                linkto="/privacy-policy"
                icon="Gavel"
            />
    </div>
)*/

const SidebarLinkList = () => (
    <div style={ styles.linkList }>
        {
            auth.isAuthenticated() /* need to check if he is admin! */ ?
				<div style={ styles.singleLink }>
					<Link to="/admin-dashboard" style={ styles.link }>
						<VerifiedUser style={ styles.icon } />
						SisAdmin Manager Art
					</Link>       
				</div>
            :
                null
        }
        {
            auth.isAuthenticated() /*&& (need to check that he's not blocked or suspended */  ?
                <div>
					<div style={ styles.singleLink }>
						<Link to="/home" style={ styles.link }>
							<Home style={ styles.icon } />
							Member Dashboard
						</Link>       
					</div>
					<div style={ styles.singleLink }>
						<Link to="/provenance" style={ styles.link }>
							<Palette style={ styles.icon } />
							Discover Art
						</Link>       
					</div>
					<div style={ styles.singleLink }>
						<Link to="/dashboard" style={ styles.link }>
							<AccountBox style={ styles.icon } />
							Profile
						</Link>       
					</div>
                </div>
            :
                null 
        }
		<div style={ styles.singleLink }>
			<Link to="/how-it-works" style={ styles.link }>
				<Settings style={ styles.icon } />
				How it Works
			</Link>       
		</div>
		<div style={ styles.singleLink }>
			<Link to="/about-us" style={ styles.link }>
				<Fingerprint style={ styles.icon } />
				About us
			</Link>       
		</div>
		<div style={ styles.singleLink }>
			<Link to="/terms-of-service" style={ styles.link }>
				<ChromeReaderMode style={ styles.icon } />
				Terms of service
			</Link>       
		</div>
		<div style={ styles.singleLink }>
			<Link to="/privacy-policy" style={ styles.link }>
				<Gavel style={ styles.icon } />
				Privacy Policy
			</Link>       
		</div>

    </div>
)
export default (SidebarLinkList) 
