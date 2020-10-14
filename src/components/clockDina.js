import React, {Component} from 'react';

export default class ClockDina extends Component {
    constructor(props) {
        super(props);
        this.state = {
          d: new Date()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            d: new Date()
        });
    }

    render() {
        const d = this.state.d;
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const day = days[d.getDay() -1].toString().substring(0,3);
        const date = d.getDate()	+ " " + mon[d.getMonth() - 1].toString().substring(0,3);
        const hour = d.getHours() - 3;
        const min = d.getMinutes();
        const sec = d.getSeconds();

        const clockStyle = {
            fontSize: "48px",
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "1vh",
            width: "100%",
        };

        return (
            <div className="content clock">
                <div style={clockStyle}>
                    <h1 style={{fontSize: "48px", fontWeight: "500"}}>{day}, {date}</h1>
                    <h2 style={{fontSize: "72px", fontWeight: "700"}}>{hour} : {min} : {sec}</h2>
                </div>
            </div>
        );
    }
};