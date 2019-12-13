import * as React from 'react';
import './squares.scss';

const Squares = (props) => {
    return (
        <div className="square square-outer">
            <div className="square square-center">
                <div className="square square-inner">
                </div>
            </div>
        </div>
    )
}

export default Squares;