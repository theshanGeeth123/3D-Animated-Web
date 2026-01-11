import React from 'react'
import Logo from '../assets/images/logo2.png'
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'

const Nav = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__container'>
                <ul className='navbar__list'>
                    <li className='navbar__item'>
                        <img src={Logo} alt='Apple' className='navbar__logo' />
                    </li>
                    <li className='navbar__item'>
                        <a className='navbar__link'>Store</a>
                    </li>
                    <li className='navbar__item'>
                        <a className='navbar__link'>Support</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Nav