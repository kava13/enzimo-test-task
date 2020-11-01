import React from 'react';
import '../../../../css/interface.css';
import '../../../../css/card.css';


class Card extends React.Component {

    constructor(props) {
        super(props);
        this.stars = [1, 2, 3, 4, 5];
    }


    render() {
        
        const { infoData, footerData, stylesDifferences } = this.props;
        console.log(this.props);
        return(
            <div className='card-item'>
                <div className='card-item__info'>
                    <img className='card-item__img' src={infoData.img}></img>
                    <div className='card-item__text'>
                        <span>
                            {infoData.name}
                        </span>
                        <div className='card-item__rating'>
                            <div className='card-item__speciality'>{infoData.speciality}</div>
                            <div className='card-item__stars'>
                            {this.stars.map((star, index) => {
                                return index < infoData.starsByDoctor?
                                <img className='star star-full' src={infoData.starImg}></img>
                                : <img className='star star-empty' src={infoData.emptyStarImg}></img>; 
                            })}  
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-item__footer'>
                    {footerData.map( (element) => {
                        return (
                        <div className='card-item__feature' style={stylesDifferences? stylesDifferences[0] : null}>
                            <div className='card-item__favicon'>
                                <img src={element.img}></img>
                            </div>
                            <div className='card-item__service' style={stylesDifferences? stylesDifferences[1] : null}>
                                {element.text}
                            </div>
                            {element.price?
                            <div className='card-item__price'>
                                {element.price}
                            </div>
                            : null}
                        </div>)
                    })}
                </div>
            </div>
        );
        
    }
}

export default Card;