import React, {Component} from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

class ClockComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: new Date(),
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setValue(new Date()), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    setValue = (newValue) => {
        this.setState({ value: newValue });
    };

    render() {
        return (
            <div className="flex w-full h-screen justify-center items-center">
                <Clock value={this.state.value} size={"50vw"}/>
            </div>
        );
    }
}

export default ClockComponent;
