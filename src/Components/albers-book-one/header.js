import * as React from 'react';
import './header.scss';
import { ReactComponent as TitleTextSVG } from './title.svg';

const Header = (props) => {
    return (
        <div className="header">
            <TitleTextSVG />
            <p className="subtitle">Interaction</p>
        </div>
    )
}

export default Header;