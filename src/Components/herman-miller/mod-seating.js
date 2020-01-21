import * as React from 'react';
import './herman-miller.scss';

const HMModularSeating = () => {
    return (
        <div className="svg-wrapper">
            <svg className="svg-main mod-seating">
                
                <g id="logo" transform="translate(36,14) scale(0.93,0.93)">
                    <rect x="0" y="0" width="52" height="52" fill="#fff" />
                    <ellipse cx="26" cy="-14" rx="26" ry="60" />
                    <ellipse cx="26" cy="56" rx="32" ry="8" />
                    <text x="64" y="40">Modular Seating</text>
                </g>

                <g transform="translate(0,125)">
                    <rect width="40" height="320" y="0" fill="#fff" />
                    <rect width="40" height="130" y="18" fill="#fc6996" />
                    <rect width="40" height="100" y="158" fill="#fc6996" />
                </g>

                <g transform="translate(54,166)">
                    <rect width="37" height="300" fill="#fff" />
                    <rect width="37" height="33" y="40" fill="#fc6996" />
                    <rect width="37" height="20" y="242" fill="#fc6996" />
                </g> 

                <g transform="translate(100,273)">
                    <rect width="13" height="300" fill="#fff" />
                    <rect width="13" height="70" y="65" fill="#fc6996" />
                </g>

                <g transform="translate(128,135)">
                    <rect width="52" height="400" fill="#fff" />
                    <rect width="52" height="95" fill="#fc6996" />
                    <rect width="52" height="80" y="108" fill="#fc6996" />
                    <rect width="52" height="80" y="234" fill="#fc6996" />
                </g>  
            </svg>
        </div>
    );
}

export default HMModularSeating;