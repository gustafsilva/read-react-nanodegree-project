import { createStore } from 'redux';
import reducer from 'store/reducers';
import middleware from 'store/middlewares';

const store = createStore(reducer, middleware);

export default store;
