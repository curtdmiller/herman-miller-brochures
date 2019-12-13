import * as React from 'react';
import './footer.scss';

const Footer = (props) => {
    return (
        <div className="footer">
            <p>{props.text}</p>
        </div>
    )
}

export default Footer;