import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";

class App extends React.Component {
    state = {
        time: new Date()
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentDidUpdate() {
        console.log("hej");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({time: new Date()})
    }

    render() {
        return(
            <>
            <h1>The time right now is: {this.state.time.toLocaleTimeString()}</h1>
            <Header />
            <Main />
            </>
        )
    }
}

export default App;
