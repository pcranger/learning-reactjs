import React from 'react'

class SearchBar extends React.Component{
    state = { term: ''};

    onFormSubmit = (event) =>{
        event.preventDefault();//prevent refreshing page
        this.props.onSubmit(this.state.term) //SearchBar receive the props(the onSearchSubmit callback)
    }
    //arrow function : making sure that every this.arrowfunction gets executed correctly
    //onSubmit == press Enter
    render(){
        return (
        <div className = "ui segment">
            /*user hit submit and onFormSubmit is invoked, but it contains a callback function from App which calls api so the result will take time*/
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

//this.onInPutChange : a callback function (called some time in the future)
//this.onInPutChange() : this function will be called anytime component is rerendered

//central data in React component(state), not HTML DOM(<input value= "data">)
//example user press 'a': a is then stored in state, then get displayed in <input>
//storing in state can have uses like type uppercase only, number only