import * as React from 'react';
import './herman-miller.scss';

const HMAluminum = () => {
    return (
        <div className="svg-wrapper">
            <svg className="svg-main aluminum">
                <g id="logo" transform="translate(36,14) scale(0.93,0.93)">
                    <rect x="0" y="0" width="52" height="52" fill="#fff" />
                    <ellipse cx="26" cy="-14" rx="26" ry="60" />
                    <ellipse cx="26" cy="56" rx="32" ry="8" />
                    <g id="logo--text" transform="translate(0,15)">
                        <text x="64" y="0">Eames lounge</text>
                        <text x="64" y="14">chair and</text>
                        <text x="64" y="28">aluminum group</text>
                    </g>
                </g>
                <g transform="translate(0,155)">
                    <polygon points="0,122 200,122 100,0" fill="#fff" />
                    <polygon class="red-tri" points="0,101.667 33.333,101.667 16.667,122" transform="translate(16.666,0)" />
                    <polygon class="red-tri" points="0,101.667 33.333,101.667 16.667,122" transform="translate(50,0)" />
                    <polygon class="red-tri" points="0,101.667 33.333,101.667 16.667,122" transform="translate(83.333,0)" />
                    <polygon class="red-tri" points="0,101.667 33.333,101.667 16.667,122" transform="translate(116.666,0)" />
                    <polygon class="red-tri" points="0,101.667 33.333,101.667 16.667,122" transform="translate(150,0)" />
                    <g transform="translate(33.333,-20.333)">
                        <polygon class="pink-tri" points="0,101.667 33.333,101.667 16.667,122" transform="translate(0,0)" />
                        <polygon class="pink-tri" points="0,101.667 33.333,101.667 16.667,122" transform="translate(33.333,0)" />
                        <polygon class="pink-tri" points="0,101.667 33.333,101.667 16.667,122" transform="translate(66.667,0)" />
                        <polygon class="pink-tri" points="0,101.667 33.333,101.667 16.667,122" transform="translate(100,0)" />
                    </g>
                    <g transform="translate(50,-40.667)">
                        <polygon class="red-tri" points="0,101.667 33.333,101.667 16.667,122" transform="translate(0,0)" />
                        <polygon class="red-tri" points="0,101.667 33.333,101.667 16.667,122" transform="translate(33.333,0)" />
                        <polygon class="red-tri" points="0,101.667 33.333,101.667 16.667,122" transform="translate(66.667,0)" />
                    </g>
                    <g transform="translate(66.667,-61)">
                        <polygon class="pink-tri" points="0,101.667 33.333,101.667 16.667,122" transform="translate(0,0)" />
                        <polygon class="pink-tri" points="0,101.667 33.333,101.667 16.667,122" transform="translate(33.333,0)" />
                    </g>
                    <g transform="translate(83.333,-81.333)">
                        <polygon class="red-tri" points="0,101.667 33.333,101.667 16.667,122" transform="translate(0,0)" />
                    </g>
                </g>
                <g transform="translate(0,277)">
                    <rect x="0" y="0" width="200" height="163" fill="#ff7526" />
                    <polygon points="0,0 200,0 100,122" fill="#444" />
                </g>
            </svg>
        </div>
    );
}

export default HMAluminum;