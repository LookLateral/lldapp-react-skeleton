import React, { Component } from 'react'

const styles = {
	artworkInList: { 
		padding: '10px',
    	width: '140px',
    	float: 'left',
	},
	artworkInListImage: {
		width: '120px',
    	height: '160px',
    	margin: '0 auto',
    	backgroundColor: 'cornflowerblue',
	},
	artworkInListArtworkname: {
		textAlign: 'center',
    	fontWeight: 'bolder',
    	fontSize: '18px',
	},
	artworkInListArtistname: { 
		textAlign: 'center',
    	fontWeight: 'normal',
    	fontSize: '16px',
	},
}

class Artwork extends Component {
    constructor(props) {
		super(props)
		this.state = {}
		
    }    
    render() {
		return (
      	<div style={ styles.artworkInList }>					
			<div style={ styles.artworkInListImage }></div>					
			<p style={ styles.artworkInListArtworkname }>
				{ this.props.children[0] }</p>					
			<p style={ styles.artworkInListArtistname }>
				{this.props.children[1] }</p>					
			<span>
				<button id="">BTN1</button>
				<button id="">BTN2</button>
			</span>				
		</div>    
    	)
	}
}

export default(Artwork) 