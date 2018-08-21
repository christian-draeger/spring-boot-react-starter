import React, {Component} from "react";
import HelloWorld from "./components/HelloWorld";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        fetch("/data")
            .then(response => response.json())
            .then((data) => {
                this.setState(data)
            });
    }

    render() {
        return (
            <div className="App">
                <HelloWorld
                    someValue={this.state.someValue}
                    otherValue={this.state.otherValue}
                />
            </div>
        );
    }
}

export default App;
