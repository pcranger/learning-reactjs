import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

//if props.message is null
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;