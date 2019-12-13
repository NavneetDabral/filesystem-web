import  {combineReducers} from 'redux';
import appReducer from './appReducer';
import { connectRouter } from 'connected-react-router'


const rootReducer =(history)=>combineReducers({
    router: connectRouter(history),
    appReducer
});

export default rootReducer;