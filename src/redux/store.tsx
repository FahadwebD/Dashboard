import { legacy_createStore as createStore , applyMiddleware} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import logger from 'redux-logger';
import rootReducer from "./rootReducer";

// import rootSaga from './usersagas'


const sagaMiddleware = createSagaMiddleware();

const middleWares =[sagaMiddleware];

// if(process.env.NODE_ENV=== "development") {
//     middleWares.push(logger)
// }

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

// sagaMiddleware.run(rootSaga)

export default store;