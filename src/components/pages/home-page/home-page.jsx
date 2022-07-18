import React from 'react';
import NavbarTop from '../../navbar/navbar-top/navbar-top';


function HomeSection() {
    return ( 
        <section className='w-full h-screen flex flex-col'>
            <NavbarTop />
            <div id="home-page-main" className='border w-full flex-grow flex'>

            </div>
        </section>
     );
}

export default HomeSection;