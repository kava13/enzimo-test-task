import React from 'react';
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
                            
                            return (<div className='doctors-block__item'>{doctor.name}</div>)
                        })}
                    </div>     
                </div>
            </section>
            
        );
    }
}

export default Doctors;