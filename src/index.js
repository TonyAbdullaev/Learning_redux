import React from 'react';
import { compose, createStore, applyMiddleware } from "redux";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import thunk from "redux-thunk";

import App from './App';
import { rootReducer } from "./redux/rootReducer";
import { forbiddenWordsMiddleware } from "./components/middleware";
import {sagaWatcher} from "./redux/sagas";


const saga = createSagaMiddleware()
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

saga.run(sagaWatcher)

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
