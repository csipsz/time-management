import React, { Component } from 'react'

export class Clock extends Component {

  constructor() {
    super();
    this.state = { time: new Date() }
}

componentDidMount() {
    this.interval = setInterval(() => {
        this.setState({ time: new Date() });
    }, 1000);
}

componentWillUnmount() {
    clearInterval(this.interval);
}

render() {
    const { time } = this.state;
    return (
    <div className="digital-clock">
    <h2>{`${time.toLocaleTimeString().slice(0,4)}  ${time.toLocaleTimeString().slice(8)}`}</h2>
    <p>{time.toLocaleDateString()}</p>
    </div>
    )
}
}

export default Clock
