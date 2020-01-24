import React,{Component} from 'react';
import Navbar from "./components/Navbar";
import './App.css';
import User from "./components/User";


class App extends Component{
  render(){
    return(
      <div className="container">
      <Navbar title="User App Test"/> 
      <hr/>
      <User
        name="SK"
        cost="7000"
        department="Soft."
        gender="M"
      />  
      <User
        name="ZK"
        cost="5000"
        department="Analyist"
        gender="F"
      />  
      </div> 
    );
  }
}
export default App;
