import * as React from 'react';
import './herman-miller.scss';

const HMStorage = () => {
    return (
        <div className="svg-wrapper">
            <svg className="svg-main storage">

                <g id="logo" transform="translate(36,14) scale(0.93,0.93)">
                    <rect x="0" y="0" width="52" height="52" fill="#fff" />
                    <ellipse cx="26" cy="-14" rx="26" ry="60" />
                    <ellipse cx="26" cy="56" rx="32" ry="8" />
                    <text x="64" y="40">Steelframe Seating</text>
                </g>
            </svg>
        </div>
    );
}

export default HMStorage;