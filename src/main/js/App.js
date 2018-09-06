import React, {Component} from "react";
import Panel from "./components/Panel";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: []
        }

    }

    componentWillMount() {
        fetch("/data")
            .then(response => response.json())
            .then((data) => {
                this.setState({result: data})
            });
    }

    render() {
        return (
            this.state.result.map(jobResult =>
                <Panel jobResult={jobResult}/>
            )

        );
    }
}

export default App;
