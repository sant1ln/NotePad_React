import {useReducer} from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import { Home } from './containers/Home';
import {CardContext} from './Context/CardContext.js'
import { useData } from './Hooks/useData';
import initialState from './initialState';
import { cartsReducer } from './Reducer/cartsReducer';

function App() {

  /* const initialState = ({
    cart: [],
    temporal: [],
    win: false,
    actual: null
  }) */

  const [state, dispatch] = useReducer(cartsReducer, initialState)
  /* const {actualState} = useData() */
  return (
    <CardContext.Provider value={{state,dispatch}}>
      <div >
        <BrowserRouter >
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    </CardContext.Provider>
  );
}

export default App;
