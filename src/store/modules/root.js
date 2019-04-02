import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { cancelRequestEpic, retryRequestEpic } from './requests';

export const rootEpic = combineEpics(
    cancelRequestEpic,
    retryRequestEpic
);

export const rootReducer = combineReducers({
});
