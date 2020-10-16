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
    <div className="digital-clock stylegroup">
    <h2>{`${time.getHours()} :  ${time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()} ${time.getHours() < 12 ? 'AM' : 'PM'}`}</h2>
    <p>{time.toLocaleDateString()}</p>
    </div>
    )
}
}

export default Clock
