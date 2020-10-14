import React, { Component } from 'react'
import {connect} from 'react-redux'

export class Error extends Component {
    render() {
        if (this.props.errors.length > 0) {
            return (
                <div className="error-div">
                    {this.props.errors}
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

const mapStateToProps = state => {
    return {
        errors: state.error.errors
    }
}

export default connect(mapStateToProps)(Error)

