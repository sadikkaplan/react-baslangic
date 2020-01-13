import React,{Component} from 'react';
import ArticleItem from './ArticleItem';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
      <ArticleItem title="Kaplans" description="React.js ilk component uygulamasını yazıyoruz."/>
      </div>

    );
  }
}

export default App;
