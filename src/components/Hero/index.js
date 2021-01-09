import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../NaviBar';

import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn,
} from './HeroElement';

const Hero = () => {
   
    return (
        
        <HeroContainer>       
            <HeroContent>
            <NavBar/>
                <HeroItems>
                    <HeroH1>
                        Most Populer Users with Profile
                    </HeroH1>
                    <HeroP>Are you ready to see....</HeroP>
                    <HeroBtn ><Link  to='/ListOfUser'>Preview</Link></HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;