import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import {Route,BrowserRouter,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
