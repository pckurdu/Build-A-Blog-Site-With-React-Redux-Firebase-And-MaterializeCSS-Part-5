import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//createStore import code
//to use the middleware structure and merge process
import {createStore,applyMiddleware,compose} from 'redux';
//to use the thunk structure
import thunk from 'redux-thunk';

//for firebase connection
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase';
import {reduxFirestore,getFirestore} from 'redux-firestore';
 
import rootReducer from './store/reducers/rootReducer';

import {Provider} from 'react-redux';
//for firebase config
import firebaseConfig from './config/firebaseConfig';

//We create a store using createStore.
//Let's give  reducer as parameter
//store, thunk will be used to provide information
const store=createStore(
    rootReducer,
    //firebase and firestore setting process with thunk merge
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(firebaseConfig),
    reduxFirestore(firebaseConfig)
    )
  );

//In store attribute, we place the store that we created.
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
