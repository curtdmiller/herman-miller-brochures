import * as React from 'react';
import './herman-miller.scss';

const SteelframeSeating = () => {
    return (
        <div className="svg-wrapper">
            <svg className="svg-main steelframe">
                <defs>
                    <clipPath id="semi-circle-horizontal">
                        <rect x="0" y="0" width="200" height="70" />
                    </clipPath>
                    <clipPath id="semi-circle-vertical">
                        <rect x="0" y="0" width="100" height="140" />
                    </clipPath>
                </defs>
                <rect x="0" y="275" width="200" height="220" fill="#C434A3" />
                <g id="logo" transform="translate(36,14) scale(0.93,0.93)">
                    <rect x="0" y="0" width="52" height="52" fill="#fff" />
                    <ellipse cx="26" cy="-14" rx="26" ry="60" />
                    <ellipse cx="26" cy="56" rx="32" ry="8" />
                    <text x="64" y="40">Steelframe Seating</text>
                </g>

                <g transform="translate(0,275)">
                    <rect x="0" y="0" width="100%" height="175" fill="#FD2A0D" />
                    <rect x="100" y="0" width="100" height="140" fill="#fff" />
                    <circle cx="100" cy="70" r="70" fill="#fff" />
                    <circle cx="100" cy="70" r="57" fill="#000" />
                    <circle cx="100" cy="70" r="57" fill="#C434A3" clip-path="url(#semi-circle-horizontal)" />
                </g>

                <g transform="translate(0,135)">
                    <rect x="0" y="0" width="100" height="140" fill="#fff" />
                    <circle cx="100" cy="70" r="70" fill="#fff" />
                    <circle cx="100" cy="70" r="57" fill="#000" />
                    <circle cx="100" cy="70" r="57.05" fill="#FD2A0D" clip-path="url(#semi-circle-vertical)" />
                </g>

            </svg>
        </div>
    )
}

export default SteelframeSeating;