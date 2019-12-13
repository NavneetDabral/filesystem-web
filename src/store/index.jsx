import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';



export const history=createBrowserHistory();
 console.log(history)

export default function configureStore(initialState){
   
  const store = createStore(
    rootReducer(history), 
          initialState,
      composeWithDevTools(
        applyMiddleware(thunk ,
          routerMiddleware(history),
      // other store enhancers if any
      )
    )
  );
  
return store;
}

