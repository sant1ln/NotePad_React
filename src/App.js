import {useState } from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import { Home } from './containers/Home';
import {CardContext} from './Context/CardContext.js'

function App() {

  const [state, setState] = useState([{
    id:12315145,
    body: 'Body text',
    title: 'title',
  }])

  return (
    <CardContext.Provider value={{
      state,
      setState,
    }}>
      <BrowserRouter >
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </CardContext.Provider>
  );
}

export default App;
