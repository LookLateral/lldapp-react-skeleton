import React, { Component } from 'react'

const styles = {
	filterBox: {  
		width: '500px',
		height: '80px',
		backgroundColor: 'grey',
		margin: '0px auto 50px auto',
		textAlign: 'center', },
}

class FilterProvenance extends Component {        
    render() {
     return (         
         <div style={ styles.filterBox } >            
            <h5>Filters for Artworks in Provenance</h5>
         </div> 
     ) 
    }
} 
export default(FilterProvenance) 