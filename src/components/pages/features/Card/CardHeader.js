import React from 'react';
import { Link } from 'react-router-dom';

class CardHeader extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <div className='cards-header'>
                        <Link to={`/`}>
                            <button className='cards-back'>
                                <img src="images/prev.png"></img>
                            </button>
                        </Link>
                        <div className='cards-nav'>
                            <input className='cards-input' placeholder='Поиск по докторам'></input>
                            <button className='cards-search'><img src="/images/search.png"/></button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default CardHeader;