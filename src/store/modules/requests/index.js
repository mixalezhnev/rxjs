import {
    mapTo,
    switchMap,
    takeUntil,
    take,
    map,
    catchError,
    delay,
    retry
} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {ajax} from 'rxjs/ajax';

export const cancelRequestEpic = (action$, state$) => action$.pipe(
    ofType('CANCELABLE_REQUEST'),
    switchMap(action => ajax.getJSON('https://jsonplaceholder.typicode.com/todos').pipe(
        map(payload => ({
            type: 'CANCELABLE_REQUEST_FULFILLED',
            payload
        })),
        takeUntil(action$.pipe(
            ofType('CANCELABLE_REQUEST_CANCEL')
        )),
        catchError(payload => [{
            type: 'CANCELABLE_REQUEST_REJECTED',
            error: true,
            payload
    }])
)));

export const retryRequestEpic = (action$, state$) => action$.pipe(
    ofType('REPEATABLE_REQUEST'),
    switchMap(action => ajax.getJSON('https://error.com/todos').pipe(
        map(payload => ({
            type: 'REPEATABLE_REQUEST_FULFILLED',
            payload
        })),
        retry(5000),
        takeUntil(action$.pipe(
            ofType('REPEATABLE_REQUEST_CANCEL')
        )),
        catchError(payload => [{
            type: 'REPEATABLE_REQUEST_REJECTED',
            error: true,
            payload
    }])
)));
