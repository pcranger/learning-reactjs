import React from 'react'

class SearchBar extends React.Component{
    state = { term: ''};

    onFormSubmit = (event) =>{
        event.preventDefault();//prevent refreshing page


        //we gonna call onsearchsubmit in App.js
        this.props.runmewhensubmit(this.state.term) //SearchBar receive the props(the onSearchSubmit callback)
        //the above becomes this.onSearchSubmit(this.state.term)
    }

    //<input>onchange: everytime user input a letter, invoke the setState
    //<form>onSubmit: everytime user submit, invoke onFormSubmit
    render(){
        return (
        <div className = "ui segment">
            <form onSubmit={this.onFormSubmit} className = "ui form">
                <div className = "field">
                    <label>Image Search</label>
                <input type = "text" value={this.state.term} onChange = {(e) => this.setState({term: e.target.value})}/>
                </div>   
            </form>    
        </div>
        )
    }
}
export default SearchBar


