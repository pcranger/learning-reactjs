import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
//latitude is a state
//callback function : will call it sometime in the future(wait for api to response)

//Function of App component is to determine lat and whether error msg orccur
//state provide App component such 2 things
class App extends React.Component {
    state = {lat: null, errorMessage: ''} //state is an object contains data relevant to component

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

    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
            //return <div> Latitude: {this.state.lat} </div>
        }
            return <Spinner message="Please accept location request"/>
    }

    render() {
        //no latitube; have errorMessage
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));
//this.state.something is to pass data from here to there, not to assign
// assign with setState