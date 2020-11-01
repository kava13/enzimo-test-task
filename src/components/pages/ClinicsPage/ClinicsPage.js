import React from 'react';
import Card from '../features/Card/Card'
import CardHeader from '../features/Card/CardHeader'

class ClinicsPage extends React.Component {

    constructor(props) {
        super(props);
        this.clinicsDetailedData = [{
            name: 'Клиника Марии Поповой',
            speciality: '38 врачей',
            img: 'images/clinicsPage/clinic-logo.png',
            starsByDoctor: 1,
            starImg: 'images/doctorsPage/star-blue.png',
            emptyStarImg: 'images/doctorsPage/star-blue-empty.png',
          },
          {
            name: 'Клиника Марии Поповой',
            speciality: '38 врачей',
            img: 'images/clinicsPage/clinic-logo.png',
            starsByDoctor: 2,
            starImg: 'images/doctorsPage/star-yellow.png',
            emptyStarImg: 'images/doctorsPage/star-yellow-empty.png',
          },
          {
            name: 'Клиника Марии Поповой',
            speciality: '38 врачей',
            img: 'images/clinicsPage/clinic-logo.png',
            starsByDoctor: 3,
            starImg: 'images/doctorsPage/star-green.png',
            emptyStarImg: 'images/doctorsPage/star-green-empty.png',
          },
          {
            name: 'Клиника Марии Поповой',
            speciality: '38 врачей',
            img: 'images/clinicsPage/clinic-logo.png',
            starsByDoctor: 4,
            starImg: 'images/doctorsPage/star-red.png',
            emptyStarImg: 'images/doctorsPage/star-red-empty.png',
          },
          {
            name: 'Клиника Марии Поповой',
            speciality: '38 врачей',
            img: 'images/clinicsPage/clinic-logo.png',
            starsByDoctor: 5,
            starImg: 'images/doctorsPage/star-blue.png',
            emptyStarImg: 'images/doctorsPage/star-blue-empty.png',
          },
          {
            name: 'Клиника Марии Поповой',
            speciality: '38 врачей',
            img: 'images/clinicsPage/clinic-logo.png',
            starsByDoctor: 1,
            starImg: 'images/doctorsPage/star-yellow.png',
            emptyStarImg: 'images/doctorsPage/star-yellow-empty.png',
          },
          {
            name: 'Клиника Марии Поповой',
            speciality: '38 врачей',
            img: 'images/clinicsPage/clinic-logo.png',
            starsByDoctor: 2,
            starImg: 'images/doctorsPage/star-green.png',
            emptyStarImg: 'images/doctorsPage/star-green-empty.png',
          },
          {
            name: 'Клиника Марии Поповой',
            speciality: '38 врачей',
            img: 'images/clinicsPage/clinic-logo.png',
            starsByDoctor: 3,
            starImg: 'images/doctorsPage/star-red.png',
            emptyStarImg: 'images/doctorsPage/star-red-empty.png',
          },
          {
            name: 'Клиника Марии Поповой',
            speciality: '38 врачей',
            img: 'images/clinicsPage/clinic-logo.png',
            starsByDoctor: 4,
            starImg: 'images/doctorsPage/star-blue.png',
            emptyStarImg: 'images/doctorsPage/star-blue-empty.png',
          },
    ]
    this.clinicsFooterData = [{
        img: 'images/clinicsPage/geo.png',
        text: 'г. Ставрополь, ул. Шпаковская 85Б',
    }, ]
    }

    render() {

        const stylesDifferences = [ { maxWidth: '190px', justifyContent: 'unset'}, { width: '128px'} ];

        return (
            
            <React.Fragment>
                <CardHeader/>
                <section className='cards-block'>
                    <div className='container'>
                        <div className='cards-wrapper'>
                        {this.clinicsDetailedData.map((clinic) => <Card infoData={clinic} footerData={this.clinicsFooterData} stylesDifferences={stylesDifferences}/>)}
                        </div>
                    </div>
                </section>
                
            </React.Fragment>
            
        );
    }
}

export default ClinicsPage;