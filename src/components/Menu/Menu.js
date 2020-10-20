import React from 'react';
import '../../css/interface.css';
import '../../css/menu.css';

class Menu extends React.Component {
    render () {
        return (
            <section className='menu'>
                <div className='container'>
                <div className='menu-block'>
                    <div className='menu-nav'>
                        <button className='menu-nav__item' href='#'><img src="/images/menu/menu-logo.png"></img></button>
                        <button className='menu-nav__item' href='#'><img src="/images/menu/date.svg"></img></button>
                        <button className='menu-nav__item' href='#'><img src="/images/menu/stat.svg"></img></button>
                        <button className='menu-nav__item' href='#'><img src="/images/menu/user.svg"></img></button>
                    </div>
                </div>     
                </div>
            </section>
        );
    }
}

export default Menu;