import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail' //component
import ApprovalCard from './ApprovalCard'
//{jsvariable} 
//<component/> 

const App = () => {
    return (
        <div className = "ui container comments">
            <ApprovalCard>
                <CommentDetail author = "Sam" timeAgo = "Today at 4:50pm" content="Nice blog post" avatar={faker.image.avatar()}/> 
            </ApprovalCard>
            <CommentDetail author = "Alex" timeAgo = "Today at 3:20pm" content="I like the subject" avatar={faker.image.avatar()}/>
            <CommentDetail author = "Jane" timeAgo = "Today at 12:40pm" content="I like the writing" avatar={faker.image.avatar()}/>
        </div>
    );
};
ReactDOM.render(<App/>, document.querySelector('#root'));