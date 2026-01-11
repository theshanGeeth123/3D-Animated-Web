import React from 'react';
import AnimatedLogo from "../assets/images/pattern-19443.gif";

function Loader() {
    return (
        <div className='loader'>
            <img className='logo' src={AnimatedLogo} alt='apple loader' />
        </div>
    );
}

export default Loader;