import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjone } from './Data';
import Pricing from '../../Pricing';


function Services() {
    return (
        <>
        <Pricing />
            <HeroSection {...homeObjone} />
        </>
    );
};

export default Services;