import logo from './logo.svg';
import './App.scss';
import React from 'react';
import MyComponent from './components/MyComponent';

class App extends React.Component {

  render() {
    return (
      <div>
        Hello World!
        <MyComponent></MyComponent>
      </div>
    );
  }
}


export default App;
