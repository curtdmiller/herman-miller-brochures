import * as React from 'react';
import './caption.scss';

const Caption = (props) => {
    return (
        <div className="caption">
            <p>
                <a href={props.link} target="_blank" rel="noopener noreferrer">(Original)</a>
            </p>
            <img 
                src={props.mockup} 
                alt=""
            />
        </div>
    )
}

export default Caption; 