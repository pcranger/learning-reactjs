import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
//latitude is a state
//callback function : will call it sometime in the future(wait for api to response)
class App extends React.Component {
    

    state = {lat: null, errorMessage: ''} //constructor 

    componentDidMount(){
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
            return <SeasonDisplay lat={this.state.lat} />
            //return <div> Latitude: {this.state.lat} </div>

        }
        return <div>Loading!</div>
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));
