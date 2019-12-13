import * as React from 'react';
import './albers-book-one.scss';
import Footer from './footer';
import Header from './header';
import Squares from './squares';

const AlbersBookOne = (props) => {
    return (
        <div className="albers-interaction aot">
            <div className="inner">
                <Header />
                <Squares />
                <Footer text="Yale University Press" />
            </div>
        </div>
    )
}

export default AlbersBookOne;