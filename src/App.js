import './index.css';
import React from 'react';
import Squarediv from './Buttons';
import Screen from './Screen';

class App extends React.Component{
  render(){
    return(
      <div className="allWrapper" >
        <Screen/>
        <Squarediv/>
      </div>
    );
  }
}


export default App;