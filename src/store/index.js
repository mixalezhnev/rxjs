import {applyMiddleware, compose, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './modules/root';
import logger from 'redux-logger';

const epicMiddleware = createEpicMiddleware();

export const configureStore = () => {
    const store = createStore(
        () => {},
        applyMiddleware(epicMiddleware, logger)
    );

    epicMiddleware.run(rootEpic);

    return store;
}
