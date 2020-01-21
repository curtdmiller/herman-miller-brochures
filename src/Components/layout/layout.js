import * as React from 'react';
import './layout.scss';
import Header from './header';
import AlbersBookOne from '../albers-book-one/albers-book-one';
import Caption from '../caption/caption';
import mockupUrl from '../../assets/JA_Michael.jpg';
import SteelframeSeating from '../herman-miller/steelframe-seating';
import HMStorage from '../herman-miller/storage';
import HMMultipleSeating from '../herman-miller/multiple-seating';

const Layout = (props) => {
    return (
        <div className="layout">
            <Header />
            <div className="case-wrapper">
                <div className="case">
                {/* <AlbersBookOne />
                <Caption 
                    mockup={mockupUrl} 
                    link={"https://davidzwirnerbooks.com/product/josef-albers-interaction"}
                /> */}
                <SteelframeSeating />
                <HMStorage />
                <HMMultipleSeating />
                </div>
            </div>
        </div>
    )
}

export default Layout;