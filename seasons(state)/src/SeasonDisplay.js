import './SeasonDisplay.css';
import React from 'react';


const seasonConfig = { //seasonConfig is an object with keys summer and winter and their values
    summer: {
        text:'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    }
}
const getSeason = (lat,month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'; //(lat > 0): in the northen hemisphere
    } else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth()) //season = winter or summer
    const {text, iconName} = seasonConfig[season]

    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}/>

    </div>
    )
}
export default SeasonDisplay

//`${icon} icon` string template to seperate variable and text