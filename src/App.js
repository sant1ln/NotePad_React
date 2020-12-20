import {useReducer} from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import { Home } from './containers/Home';
import {CardContext} from './Context/CardContext.js'
import { cartsReducer } from './Reducer/cartsReducer';

function App() {

  const initialState = ({
    cart: [],
    win: false,
    actual: 'create'
  })

  const [state, dispatch] = useReducer(cartsReducer, initialState)

  return (
    <CardContext.Provider value={{state,dispatch}}>
      <BrowserRouter >
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </CardContext.Provider>
  );
}

export default App;
