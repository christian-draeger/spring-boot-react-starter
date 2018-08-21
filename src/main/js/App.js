import React, {Component} from "react";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentWillMount() {
        fetch('http://localhost:8089/data')
            .then(response => {
                this.setState({data: response.json()})
            });
    }

    render() {
        return (
            <div className="App">
                hallo
            </div>
        );
    }
}

export default App;
