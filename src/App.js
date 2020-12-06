import {Route,BrowserRouter,Switch} from 'react-router-dom'
import { Home } from './containers/Home';

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
