import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';

import thunk from 'redux-thunk'
import {applyMiddleware, compose, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux'
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const allStoreEhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(
  allReducers,
 {
      products: [{name: 'iPhone'}],
      user: 'Michael'
  },
  allStoreEhancers
);

ReactDOM.render(

<Provider store={store}>
<App
aRandomProps="whatever"
/>
</Provider>

, document.getElementById('root')
);
