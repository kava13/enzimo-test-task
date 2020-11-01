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
                        <div className='cards-search'>
                            <input className='cards-input' placeholder='Поиск по докторам'></input>
                            <button className='cards-faq'>?</button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default CardHeader;