import React from 'react';
import Timeline from './container/timeline';
import Home from './container/home';
import NoMatchPage from './components/noMatchFound'
import './main.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {  
  // constructor(props){
  //   super(props);
  // }

  render(){
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/timeline" component = {Timeline}/>
          <Route component={NoMatchPage} />
        </Switch>    
      </Router>
    </div>
  );
  }
}

export default App;
