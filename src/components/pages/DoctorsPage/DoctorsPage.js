import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../features/Card/Card'
import CardHeader from '../features/Card/CardHeader'

class DoctorsPage extends React.Component {

    constructor(props) {
        super(props);
        this.doctorsDetailedData = [{
            name: 'Куприянов Артем Николаевич',
            speciality: 'Терапевт',
            img: 'images/doctorsPage/doctorFace.png',
            starsByDoctor: 3,
            starImg: 'images/doctorsPage/star-blue.png',
            emptyStarImg: 'images/doctorsPage/star-blue-empty.png',
          },
          {
            name: 'Куприянов Артем Николаевич',
            speciality: 'Терапевт',
            img: 'images/doctorsPage/doctorFace.png',
            starsByDoctor: 2,
            starImg: 'images/doctorsPage/star-yellow.png',
            emptyStarImg: 'images/doctorsPage/star-yellow-empty.png',
          },
          {
            name: 'Куприянов Артем Николаевич',
            speciality: 'Терапевт',
            img: 'images/doctorsPage/doctorFace.png',
            starsByDoctor: 1,
            starImg: 'images/doctorsPage/star-green.png',
            emptyStarImg: 'images/doctorsPage/star-green-empty.png',
          },
          {
            name: 'Куприянов Артем Николаевич',
            speciality: 'Терапевт',
            img: 'images/doctorsPage/doctorFace.png',
            starsByDoctor: 3,
            starImg: 'images/doctorsPage/star-red.png',
            emptyStarImg: 'images/doctorsPage/star-red-empty.png',
          },
          {
            name: 'Куприянов Артем Николаевич',
            speciality: 'Терапевт',
            img: 'images/doctorsPage/doctorFace.png',
            starsByDoctor: 4,
            starImg: 'images/doctorsPage/star-blue.png',
            emptyStarImg: 'images/doctorsPage/star-blue-empty.png',
          },
          {
            name: 'Куприянов Артем Николаевич',
            speciality: 'Терапевт',
            img: 'images/doctorsPage/doctorFace.png',
            starsByDoctor: 5,
            starImg: 'images/doctorsPage/star-yellow.png',
            emptyStarImg: 'images/doctorsPage/star-yellow-empty.png',
          },
          {
            name: 'Куприянов Артем Николаевич',
            speciality: 'Терапевт',
            img: 'images/doctorsPage/doctorFace.png',
            starsByDoctor: 3,
            starImg: 'images/doctorsPage/star-green.png',
            emptyStarImg: 'images/doctorsPage/star-green-empty.png',
          },
          {
            name: 'Куприянов Артем Николаевич',
            speciality: 'Терапевт',
            img: 'images/doctorsPage/doctorFace.png',
            starsByDoctor: 2,
            starImg: 'images/doctorsPage/star-red.png',
            emptyStarImg: 'images/doctorsPage/star-red-empty.png',
          },
          {
            name: 'Куприянов Артем Николаевич',
            speciality: 'Терапевт',
            img: 'images/doctorsPage/doctorFace.png',
            starsByDoctor: 4,
            starImg: 'images/doctorsPage/star-blue.png',
            emptyStarImg: 'images/doctorsPage/star-blue-empty.png',
          },
    ]
    this.doctorsFooterData = [{
        img: 'images/doctorsPage/online.png',
        text: 'Онлайн прием',
        price: '1800 ₽'
    },
    {
        img: 'images/doctorsPage/clinic.png',
        text: 'Онлайн прием',
        price: '1900 ₽'
    },
    {
        img: 'images/doctorsPage/house.png',
        text: 'Онлайн прием',
        price: '2000 ₽'
    }]
    }

    render() {
        
        return (
            <React.Fragment>
                <CardHeader/>
                <section className='cards-block'>
                    <div className='container'>
                        <div className='cards-wrapper'>
                        {this.doctorsDetailedData.map((doctor) => <Card infoData={doctor} footerData={this.doctorsFooterData} />)}
                        </div>
                    </div>
                </section>
            </React.Fragment>
            
        );
        
    }
}

export default DoctorsPage;