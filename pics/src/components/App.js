import React from 'react'
import SearchBar from './SearchBar'
class App extends React.Component{
    onSearchSubmit(term){
        console.log(term);
    }
    //when term is passed to onSearchSubmit, we can begin making api request for this data term

    render(){
        return (
            <div className = "ui container" style = {{marginTop: '10px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit}/> /*. The App component passed a reference of the onSearchSubmit callback as a prop to the SearchBar component*/
            </div>
        )
    }
}
export default App