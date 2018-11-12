import React, { Component } from 'react'
import FilterProvenance from './components/FilterProvenance'
import ArtworkInList from './components/ArtworkInList'


class Provenance extends Component {
  constructor(props) {
		super(props)
		this.state = {
			artworks: [
				{ id: 1, title: "title1", artist: "artist1" },				
				{ id: 2, title: "title2", artist: "artist1" },
				{ id: 3, title: "title3", artist: "artist2" },
        		{ id: 4, title: "title4", artist: "artist3" }
			]
		}
		this.eachArtwork = this.eachArtwork.bind(this)
  }
  
  eachArtwork(artwork, i) {
		return (
			<ArtworkInList key={i} index={i}>
        		{ artwork.title } 
        		{ artwork.artist }
		  </ArtworkInList>
		)
	}

  render() {
     return (                
        <div style={{ width:'100%', }}>            
            <h1>Provenance Page</h1>
            <FilterProvenance />
            { this.state.artworks.map(this.eachArtwork) }
            { this.state.artworks.map(this.eachArtwork) }
            { this.state.artworks.map(this.eachArtwork) }
            { this.state.artworks.map(this.eachArtwork) }
            { this.state.artworks.map(this.eachArtwork) }
            { this.state.artworks.map(this.eachArtwork) }            
        </div>
     ) 
  }
}
export default(Provenance) 