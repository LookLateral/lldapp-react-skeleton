import React from 'react'
import { Link } from 'react-router-dom'

const MaterialIcon = (icon) => {  
  	//let resolved = require(`material-ui/${icon}`).default    
	let resolved = require('material-ui-icons/' + icon).default   
	if (!resolved) {
        throw Error('Could not find material-ui-icons/' + icon)
    }
    return React.createElement(resolved)
}

const SidebarSingleLink = (props) => (

    <div className="sidebar-single-link">
        <Link to="{props.link}">
            <MaterialIcon icon={props.icon} />
            {props.name}
        </Link>       
    </div>
)

export default (SidebarSingleLink) 