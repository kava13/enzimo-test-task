import React from 'react';
import '../../css/interface.css';
import '../../css/header.css';

class Header extends React.Component {
    render () {
        return (
            <header className='header'>
                <div className='container'>
                <div className='header-block'>
                    <div className='header-logo'>
                    <div className='header-logo__img'><img src="/images/logo-img.png"/></div>
                    <div className='header-logo__text'><img src="/images/logo-text.png"/></div>
                    </div>
                    <div className='header-nav'>
                        <button className='header-nav__search' href='#'><img src="/images/search.png"></img></button>
                        <button className='header-nav__faq' href='#'>?</button>
                    </div>
                </div>     
            </div>
            </header>
            
        );
    }
}

export default Header;