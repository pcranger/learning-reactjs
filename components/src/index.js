import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail' //component
//{jsvariable} 
//<component/> 

const App = () => {
    return (
        <div className = "ui container comments">
            <CommentDetail author = "Sam" /> 
            <CommentDetail author = "Alex"/>
            <CommentDetail author = "Jane"/>
            <CommentDetail/>
        </div>
    );
};
ReactDOM.render(<App/>, document.querySelector('#root'));