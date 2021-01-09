import './App.css';

import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import ListOfUser from './components/ListOfPeople';
import People from './components/ListOfPeople/people'
import CreatePeople from './components/ListOfPeople/CreatePeople';

function App() {
  
    
  return (
    <Router>
    <GlobalStyle/>
      
     
     <Switch>
        <Route exact path='/'><Hero/></Route>
        <Route  path='/ListOfUser' component={ListOfUser} />
        <Route  path='/ListofPeople/CreatePeople' component={CreatePeople} />
        <Route path="/ListofPeople/:userId" component={ People } />
    
      </Switch>
      
     
     </Router>
  );
}

export default App;

