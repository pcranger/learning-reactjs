import React from 'react'
import ReactDOM from 'react-dom'
//latitude is a state
//callback function : will call it sometime in the future(wait for api to response)
class App extends React.Component {
    constructor(props) {
        super(props);
        //only assign value to this.state in constructor
        this.state = { lat: null, errorMessage: '' };

        //tools
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }


    render() {
        //no latitube; have errorMessage
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div> Latitude: {this.state.lat} </div>

        }
        return <div>Loading!</div>
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));
