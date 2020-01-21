import * as React from 'react';
import './herman-miller.scss';

const HMMultipleSeating = () => {
    return (
        <div className="svg-wrapper">
            <svg className="svg-main multi-seating">
                <defs>
                    <g id="bench">
                        <rect width="177" height="30" fill="#fd3a00" />
                        <rect width="177" height="6" y="30" fill="#fff" />
                    </g>
                </defs>
                
                <g id="logo" transform="translate(36,14) scale(0.93,0.93)">
                    <rect x="0" y="0" width="52" height="52" fill="#fff" />
                    <ellipse cx="26" cy="-14" rx="26" ry="60" />
                    <ellipse cx="26" cy="56" rx="32" ry="8" />
                    <text x="64" y="40">Multiple Seating</text>
                </g>

                <use href="#bench" y="135"/>
                <use href="#bench" y="185" x="23"/>
                <use href="#bench" y="235"/>
                <use href="#bench" y="285" x="23"/>
                <use href="#bench" y="335"/>
                <use href="#bench" y="385" x="23"/>

            </svg>
        </div>
    );
}

export default HMMultipleSeating;