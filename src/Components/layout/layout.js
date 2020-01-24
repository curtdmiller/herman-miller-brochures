import * as React from 'react';
import './layout.scss';
import Header from './header';
import SteelframeSeating from '../herman-miller/steelframe-seating';
import HMStorage from '../herman-miller/storage';
import HMMultipleSeating from '../herman-miller/multiple-seating';
import HMModularSeating from '../herman-miller/mod-seating';
import HMOfficeGroups from '../herman-miller/office-groups';
import HMInc from '../herman-miller/hm-inc';
import EamesChairs from '../herman-miller/eames-chairs';
import HMAluminum from '../herman-miller/aluminum';
import HMTextiles from '../herman-miller/textiles';

const Layout = (props) => {
    return (
        <div className="layout">
            <Header />
            <div className="case-wrapper">
                <div className="case">
                <HMInc />
                <EamesChairs />
                <HMAluminum />
                <HMTextiles />
                <SteelframeSeating />
                <HMStorage />
                <HMMultipleSeating />
                <HMModularSeating />
                <HMOfficeGroups />
                </div>
            </div>
        </div>
    )
}

export default Layout;