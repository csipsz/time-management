import React from 'react'

const Test = (props) => {
    return (
        <div>
            {props.task ? props.task.title : "Loading"}
        </div>
    )
}

export default Test
