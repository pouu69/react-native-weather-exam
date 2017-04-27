import { combineReducers } from 'redux';
import navigation from './navigation';
import dust from './dust';
import views from './views';

const rootReducer = combineReducers({
    navigation, dust, views
});

export default rootReducer;
