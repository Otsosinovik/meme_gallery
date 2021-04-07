import './App.css';
import Header from './header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Category from './category/Category';
import Dashboard from './dashboard/Dashboard';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path='/dashboard'>
            <Dashboard/>
          </Route>

          <Route path='/category'>
            <Category/>
          </Route>

          <Route path='*'>
            <Redirect to='/dashboard' push={true}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
