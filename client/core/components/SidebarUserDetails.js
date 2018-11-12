import React from 'react'
import auth from './../../auth/auth-helper'

const styles = {
	userDetails: { textAlign: 'center', marginBottom: '20px', },
	userPic: {
		width: '72px',
		height: '72px',
		backgroundColor: 'white',
    	margin: '25px auto',	
	},
	userName: { color: '#fff', fontSize: '16px', },
	userType: { color: '#fff', fontSize: '12px', }
}

const SidebarUserDetail = () => (
    auth.isAuthenticated() ? 
        <div style={styles.userDetails}>         
            <div style={styles.userPic}></div>
            <div style={styles.userName}>Simone Xyzjk</div>
            <div style={styles.userType}>Administrator</div>
        </div>         
    : null   
)
export default (SidebarUserDetail) 
