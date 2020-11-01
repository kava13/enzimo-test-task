import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './css/interface.css';
import Header from './components/Header/Header';
import Symptoms from './components/Symptoms/Symptoms';
import Doctors from './components/Doctors/Doctors';
import Clinics from './components/Clinics/Clinics';
import Menu from './components/Menu/Menu';
import DoctorsPage from './components/pages/DoctorsPage/DoctorsPage'
import ClinicsPage from './components/pages/ClinicsPage/ClinicsPage'



class App extends React.Component {

  constructor(props) {
    super()
    this.state = {
      doctorsData: [],
      clinicsData: [{
          img: 'images/clinics/popova.png',
          text: 'Клиника Марии Поповой',
          color: 'linear-gradient(293.6deg, #3AC3AF 50.62%, #64DBCA 95.85%)'
        },
        {
          img: 'images/clinics/vita.png',
          text: 'Медицинский центр Вита',
          color: 'linear-gradient(296.23deg, #F7F9FB 28.99%, #FFFFFF 73.91%)'
        },
        {
          img: 'images/clinics/lore.png',
          text: 'Лор Клиника',
          color: 'linear-gradient(293.6deg, #518CFF 50.62%, #86ADF9 95.85%)'
        },
        {
          img: 'images/clinics/another1.png',
          text: 'Клиника номер 4',
          color: 'linear-gradient(293.6deg, #3AC3AF 50.62%, #64DBCA 95.85%)'
        },
        {
          img: 'images/clinics/another2.png',
          text: 'Клиника номер 5',
          color: 'linear-gradient(293.6deg, #3AC3AF 50.62%, #64DBCA 95.85%)'
        },
        {
          img: 'images/clinics/another3.png',
          text: 'Клиника номер 6',
          color: 'linear-gradient(293.6deg, #3AC3AF 50.62%, #64DBCA 95.85%)'
        }
      ],
      symptomsData: [{
        img: 'images/symptoms/stomach.svg',
        text: 'Боли в животе',
        color: 'linear-gradient(313.26deg, rgba(249, 177, 97, 0.5) 57.2%, rgba(251, 193, 134, 0.5) 84.09%)'
      },
      {
        img: 'images/symptoms/tooth.svg',
        text: 'Зубная боль',
        color: 'linear-gradient(298.7deg, rgba(80, 133, 238, 0.5) 38.31%, rgba(124, 159, 227, 0.5) 77.56%)'
      },
      {
        img: 'images/symptoms/injury.svg',
        text: 'Последствия травм',
        color: 'linear-gradient(301.3deg, rgba(53, 173, 156, 0.5) 36.46%, rgba(92, 199, 183, 0.5) 74.37%)'
      },
      {
        img: 'images/symptoms/heart.svg',
        text: 'Проблемы с сердцем',
        color: 'linear-gradient(299.96deg, rgba(219, 103, 142, 0.5) 47.21%, rgba(232, 148, 176, 0.5) 76.12%)'
      },
      {
        img: 'images/symptoms/virus.svg',
        text: 'Простуда',
        color: 'linear-gradient(313.26deg, rgba(249, 177, 97, 0.5) 57.2%, rgba(251, 193, 134, 0.5) 84.09%)'
      },
      {
        img: 'images/symptoms/stomach.svg',
        text: 'Тропическая гемангиома Мовсисяна',
        color: 'linear-gradient(298.7deg, rgba(80, 133, 238, 0.5) 38.31%, rgba(124, 159, 227, 0.5) 77.56%)'
      },
      {
        img: 'images/symptoms/stomach.svg',
        text: 'Просто хочу больничный',
        color: 'linear-gradient(301.3deg, rgba(53, 173, 156, 0.5) 36.46%, rgba(92, 199, 183, 0.5) 74.37%)'
      },
    ]
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await axios.get('/enzimo-data.json');
    this.setState({ doctorsData: response.data})
  }

  render() {
  
    const { doctorsData, clinicsData, symptomsData } = this.state;
  
    return (
      <Router>
        <Route exact path='/'>
        <div>
          <Header/>
          <Symptoms symptomsData={symptomsData}/>
          <Doctors doctorsData={doctorsData}/>
          <div className='container'>
            <Clinics clinicsData={clinicsData}/>
          </div>
          <Menu/>
        </div>
        </Route>
        <Route exact path='/doctors' component={DoctorsPage}></Route>
        <Route exact path='/clinics' component={ClinicsPage}></Route>
      </Router>
     
    );
  }
}

export default App;
