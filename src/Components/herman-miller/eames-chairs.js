import * as React from 'react';
import './herman-miller.scss';

const EamesChairs = () => {
    return (
        <div className="svg-wrapper">
            <svg className="svg-main chairs">
                <g transform="translate(0,220)">
                    <rect x="0" y="0" width="200" height="220" fill="#2bffa0" />
                    <g transform="rotate(-60) translate(-200, 55)" >
                        <rect x="0" y="0" width="1000" height="18" fill="#fff" />
                        <rect x="0" y="36" width="1000" height="18" fill="#fff" />
                        <rect x="0" y="72" width="1000" height="18" fill="#fff" />
                        <rect x="0" y="108" width="1000" height="18" fill="#fff" />
                        <rect x="0" y="144" width="1000" height="18" fill="#fff" />
                        <rect x="0" y="180" width="1000" height="18" fill="#fff" />
                        <rect x="0" y="216" width="1000" height="18" fill="#fff" />
                    </g>

                </g>
                <rect x="0" y="0" width="200" height="220" fill="#2ed5ff" />
                <g id="logo" transform="translate(36,14) scale(0.93,0.93)">
                    <rect x="0" y="0" width="52" height="52" fill="#fff" />
                    <ellipse cx="26" cy="-14" rx="26" ry="60" />
                    <ellipse cx="26" cy="56" rx="32" ry="8" />
                    <text x="64" y="26">Eameschairs</text>
                    <text x="64" y="40">for the home</text>
                </g>
            </svg>
        </div>
    );
}

export default EamesChairs;
