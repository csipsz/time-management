import React, { Component } from 'react'
import {connect} from 'react-redux'
import Errorboy from '../errorboy.png'

export class Error extends Component {

    render() {

        const getErrors = this.props.errors.map((error, i) => <span key={i}>{" - " + error + " "}</span>)
        
        if (this.props.errors.length > 0) {
            return (
                <>
                <div className="error-div">
                    {getErrors}
                </div>
                    <img src={Errorboy} alt={"errorBoy"}/>
                </>
            )
        } else {
        return (<></>)
        }
    }
}

const mapStateToProps = state => {
    return {
        errors: state.error.errors
    }
}

export default connect(mapStateToProps)(Error)

