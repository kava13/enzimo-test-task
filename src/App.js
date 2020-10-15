import React from 'react';
import axios from 'axios';
import './App.css';
import './css/interface.css';
import Header from './components/Header/Header';
import Doctors from './components/Doctors/Doctors';

class App extends React.Component {

  constructor(props) {
    super()
    this.state = { doctorsData: [] }
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await axios.get('/enzimo-data.json');
    this.setState({ doctorsData: response.data})
  }

  render() {
  
    const { doctorsData } = this.state;
    

    return (
      <div>
        <Header/>
        { <Doctors doctorsData={doctorsData}/> }
      </div>
    );
  }
}

export default App;
