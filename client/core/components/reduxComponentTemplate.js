/*  template for a redux component
    change the uppercase words */ 

import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as /*ACTIONS*/ from '../actions/ACTIONSFILENAME'

class COMPONENTNAME extends React.Component {
    constructor(props) {
        super(props)

        // bind functions here    
        // this.FUNCTIONNAME = this.FUNCTIONNAME.bind(this)

    }

    /* functions to handle the event in the component binded ^ */

    render() {
        return (
//          component body
        )

    }
}


COMPONENTNAME.propTypes = {
//  PROPS: PropTypes.TYPE.isRequired
}

function mapStateToProps (state, ownProps)
    return {
        state: state
    }
function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(ACTIONS, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(COMPONENTNAME)