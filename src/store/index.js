import { createStore } from 'redux';
import { mainReducer } from './reducers.redux';

const store = createStore(mainReducer);

export default store;