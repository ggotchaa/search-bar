import React from 'react';

import './App.css';

import NamesContainer from './NamesContainer';

class App extends React.Component {

  state = {
    names: [
      'Nurs', 'Nurik', 'Ilon fking Musk', 'Kendirgali', 'Malen Kihren', 'Mike Ouxmaul','азик-тазик', 'Queen Elizabeth', 'Yeezy-xeezy', 'Ivanka Trump', 'Leonardo DiCaprio', 
    ],
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }


    render(){
      return (
        <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
          <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'инпут имя'/>
          <br></br>
          <h3>Ищем имена</h3>
          <NamesContainer names = {this.dynamicSearch()}/>
        </div>
      );
    }
}

export default App;
