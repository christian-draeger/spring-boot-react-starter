import React, {Component} from "react";
import "../scss/components/App.scss";
import Container from "./components/container/Container";

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
                <Container/>
            </div>
            );
    }
}

export default App;
