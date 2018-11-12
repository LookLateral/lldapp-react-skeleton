import React, { Component } from 'react'
import Dehaze from 'material-ui-icons/Dehaze'

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
	color: 'white',
    fontSize: '2em',
    position: 'absolute',
    right: '30px',
    top:'30px',
	zIndex: 9999,
}

class IconSandwich extends Component {        
    render() {
        return (
            this.props.isOpen ?                
				<Dehaze rotation={90} onClick={ this.props.onClick } style={styles} />
            :
                <Dehaze onClick={ this.props.onClick} style={styles} />
        )
    }
}
export default (IconSandwich) 