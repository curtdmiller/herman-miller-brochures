import * as React from 'react';
import './herman-miller.scss';

const HMTextiles = () => {
    return (
        <div className="svg-wrapper">
            <svg className="svg-main textiles">
                <defs>
                    <filter id="mixer">
                        {/* <feComposite in="SourceGraphic" in2="BackgroundImage" operator="atop" result="comp" /> */}
                        <feBlend in="SourceImage" in2="BackgroundImage" mode="multiply" />
                    </filter>
                    <filter id="blender" x="0" y="0" width="200%">
                        <feFlood result="floodFill" x="0" y="0" width="200%" height="13" flood-color="#f8ec4e" flood-opacity=".8" />
                        <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
                    </filter>
                </defs>
                <g id="logo" transform="translate(40,14) scale(0.93,0.93)">
                    <rect x="0" y="0" width="52" height="52" />
                    <ellipse cx="26" cy="-14" rx="26" ry="60" />
                    <ellipse cx="26" cy="56" rx="32" ry="8" />
                    <g id="logo--text" transform="translate(0,15)">
                        <text x="64" y="0">Herman</text>
                        <text x="64" y="14">Miller</text>
                        <text x="64" y="28">Textiles</text>
                    </g>
                </g>
                <g id="pink-stripes" transform="translate(0, 142)" enable-background="new" >
                    <rect x="20" width="13" height="298" fill="#ff8cf0" />
                    <rect x="56" width="13" height="298" fill="#ff8cf0" />
                    <rect x="92" width="13" height="298" fill="#ff8cf0" />
                    <rect x="128" width="13" height="298" fill="#ff8cf0" />
                    <rect x="164" width="13" height="298" fill="#ff8cf0" />

                    <rect id="yellow-stripe" x="-50" y="140" width="300" height="13" />
                    <use href="#yellow-stripe" y="20" transform="rotate(-2)" />
                    <use href="#yellow-stripe" y="36" />
                    <use href="#yellow-stripe" y="75" transform="rotate(-4)" />
                    <use href="#yellow-stripe" y="92" />
                    <use href="#yellow-stripe" y="110" />
                    <use href="#yellow-stripe" y="132" transform="rotate(3)" />
                </g>

            </svg>
        </div>
    );
}

export default HMTextiles;