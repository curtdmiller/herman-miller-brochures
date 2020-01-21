import * as React from 'react';
import './herman-miller.scss';

const HMStorage = () => {
    return (
        <div className="svg-wrapper">
            <svg className="svg-main storage">
                <defs>
                    <rect id="red-rect" x="0" y="0" width="16.666667%" height="45" fill="#fd330f" />
                    <polygon id="parallelogram" points="0,0 33.3333,0 66.6667,45 33.3333,45" fill="#fff" />
                </defs>

                <g id="logo" transform="translate(36,14) scale(0.93,0.93)">
                    <rect x="0" y="0" width="52" height="52" fill="#fff" />
                    <ellipse cx="26" cy="-14" rx="26" ry="60" />
                    <ellipse cx="26" cy="56" rx="32" ry="8" />
                    <text x="64" y="15">A comprehensive</text>
                    <text x="64" y="30">storage system</text>
                    <text x="64" y="45">for the office</text>
                </g>

                <g transform="translate(0,170)" >
                    <g id="pattern">
                        <use href="#parallelogram" />
                        <use href="#parallelogram" x="-33.333" y="45"/>
                        <use href="#parallelogram" x="33.333" y="90" />

                        <use href="#red-rect" x="33.3333%" y="0" />
                        <use href="#red-rect" x="16.6667%" y="45" />
                        <use href="#red-rect" x="0" y="90" />
                    </g>
                    <use href="#pattern" x="0" y="135" />
                    <use href="#pattern" x="50%" y="0" />
                    <use href="#pattern" x="50%" y="135" />
                </g>
            </svg>
        </div>
    );
}

export default HMStorage;