import { createStore } from 'redux';
import counterReducer from './reducer/counterReducer';


const store =  createStore(counterReducer); // store the state variable


export default store;

