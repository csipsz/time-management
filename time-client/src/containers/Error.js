import React, { Component } from 'react'
import {connect} from 'react-redux'
import Errorboy from '../errorboy.png'

export class Error extends Component {

    render() {
        if (this.props.errors.length > 0) {
            return (
                <div>
                <div className="error-div">
                    {this.props.errors}
                </div>
                    {this.props.errors ? <img src={Errorboy}/> : null}
                </div>
            )
        } else {
        return (<div></div>)
        }
    }
}

const mapStateToProps = state => {
    return {
        errors: state.error.errors
    }
}

export default connect(mapStateToProps)(Error)

