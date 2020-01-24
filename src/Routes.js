import React,{Component} from 'react';
import Login from "./containers/Login";
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
<Route path="/login" exact component={Login} />
      </div>
    );
  }
}
export default App;
