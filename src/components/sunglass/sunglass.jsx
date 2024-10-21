import React from 'react';
import './sunglass.css'
import Watch from '../watch/watch';


const sunglass = () => {

    const first = 55;
    const second = 199;
    const sum = add(first, second);

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default sunglass;