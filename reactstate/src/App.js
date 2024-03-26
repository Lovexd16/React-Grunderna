import { Component } from "react";
import Counter from "./counter";

class App extends Component {
        state = {
            count: 0
        };

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    };


    render() {
        return(
            <div>
                <h1>Hello world</h1>
                <h3>{this.state.count}</h3>
                <Counter count={this.state.count}/>
                <button onClick={this.handleClick}>Höj antalet</button>
            </div>
        );
    }
}

export default App;