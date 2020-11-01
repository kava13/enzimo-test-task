import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/interface.css';
import '../../css/doctors.css';


class Doctors extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { doctorsData } = this.props;
        return (
            <section className='doctors'>
                <div className='container'>
                    <div className='doctors-block'>
                        {doctorsData.map((doctor) => {
                            return (
                            <a className='doctors-block__item' href="#">
                                <div className='doctors-block__img'>
                                    <img src={doctor.img}></img>
                                </div>
                                <div className='doctors-block__text'>
                                    <span className='doctors-block__title'>{doctor.name}</span>
                                    <span className='doctors-block__description'>{doctor.description}</span>
                                </div>
                            </a>)
                        })}
                    </div>
                    <div className='doctors-text'>
                    <Link to={`/doctors`}>
                    <a href="#">
                            <span>Посмотреть все</span>
                            <img src="/images/next.png"></img>
                        </a>
                    </Link>
                        
                    </div>     
                </div>
            </section>
            
        );
    }
}

export default Doctors;