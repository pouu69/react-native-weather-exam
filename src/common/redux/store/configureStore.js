import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from '../reducers';

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
// var logger = createLogger({
//     predicate: (getState, action) => isDebuggingInChrome,
//     collasped: true,
//     duration: true
// });

var middlewares = compose(applyMiddleware(thunk, createLogger), autoRehydrate());

export default function configureStore(){
    const store = createStore(reducers, undefined, middlewares);
    persistStore(store, {storage: AsyncStorage});
    if(isDebuggingInChrome){
        window.store = store;
    }
    return store;
}
