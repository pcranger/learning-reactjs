// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'


function getButtonText(){
    return 'Click on me!';
}

// Create a react component
const App = function(){
    const buttonText = {text: 'click me'};
    return (
        <div>
        <label className = "label" for= "name">
        Enter name:                 
         </label>
         <input id = "name" type ="text"/>
         <button style={{backgroundColor: 'blue', color : 'white'}}>
             {buttonText.text} 
        </button>
        </div>
    );
}

// Take react component and show on screen
ReactDOM.render(<App/>,document.querySelector('#root'));