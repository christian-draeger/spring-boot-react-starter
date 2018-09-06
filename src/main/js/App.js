import React, {Component} from "react";
import Panel from "./components/Panel";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            someValue: "",
            otherValue: ""
        }
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
            <div>
                <Panel
                    someValue={this.state.someValue}
                    otherValue={this.state.otherValue}
                />
            </div>
        );
    }
}

export default App;
