import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './history';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk'; NOTE: if u want thunk, just use it instead
import logger from 'redux-logger'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { asyncActionsMiddleware } from './middleware/asyncActionsMiddleware';
import rootSaga from './rootSaga';
import { userLoggedAlready } from './actions/auth';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, asyncActionsMiddleware, logger))
);
sagaMiddleware.run(rootSaga);

if (localStorage.authenticatedUser) {
  store.dispatch(userLoggedAlready(JSON.parse(localStorage.authenticatedUser)));
}

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
     document.getElementById('root')
);
registerServiceWorker();
