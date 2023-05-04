import React from "react";
import Controls from "./Controls";
import Value from "./Value";

class Counter extends React.Component{

static defaultProps = {
    initialValue: 0,
}

static propTypes = {
    ///
}

state = {
    value: this.props.initialValue,
}

handleIncrement = () => {
    this.setState((prevState) => ({
            value: prevState.value + 1,
    }));
};

handleDecrement = () => {
    this.setState((prevState) => ({
        value: prevState.value - 1,
    }))
};

    render() {
        return (
            <div className="Counter">
                <Value onValue={this.state.value}/>
                 <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
            </div>
        )
    }
}


export default Counter;