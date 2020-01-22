import * as React from 'react';
import './herman-miller.scss';

const HMOfficeGroups = () => {
    return (
        <div className="svg-wrapper">
            <svg className="svg-main office-groups">
                <defs>
                    <pattern id="pattern" x="0" y="0" width="20%" height="100%" >
                        <polygon y="43.30127" points="0,43.30127 50,43.30127 25,0" fill="#eb5094" />
                    </pattern>
                </defs>
                <g id="logo" transform="translate(36,14) scale(0.93,0.93)">
                    <rect x="0" y="0" width="52" height="52" fill="#fff" />
                    <ellipse cx="26" cy="-14" rx="26" ry="60" />
                    <ellipse cx="26" cy="56" rx="32" ry="8" />
                    <text x="64" y="25">Herman Miller</text>
                    <text x="64" y="40">Office Groups</text>
                </g>
                <rect fill="url(#pattern)" x="-25" y="223.49365" width="250" height="43.30127" />
                <rect fill="url(#pattern)" x="0" y="266.79492" width="250" height="43.30127" />
                <rect fill="url(#pattern)" x="-25" y="310.09619" width="250" height="43.30127" />
                <rect fill="url(#pattern)" x="0" y="353.39746" width="250" height="43.30127" />
                <rect fill="url(#pattern)" x="-25" y="396.69873" width="250" height="43.30127" />
                <polygon transform="translate(100,353.39746)" points="0,43.30127 50,43.30127 75,0 25,0" fill="#fff" />
            </svg>
        </div>
    );
}

export default HMOfficeGroups;