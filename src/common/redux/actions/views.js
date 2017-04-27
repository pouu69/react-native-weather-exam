import moment from 'moment';
import * as types from '../constants/ActionTypes';

export function enterHome(time = moment().format()){
    return {
        type: types.ENTER_HOME_VIEW,
        currentView: 'home',
        enterTime: time,
        leaveTime: null
    };
}


export function leaveHome(time = moment().format()){
    return {
        type: types.LEAVE_HOME_VIEW,
        currentView: 'home',
        enterTime: null,
        leaveTime: time
    };
}

export function enterAppState(time = moment().format()){
    return {
        type: types.ENTER_APPSTATE_VIEW,
        currentView: 'appState',
        enterTime: time,
        leaveTime: null
    };
}

export function leaveAppState(time = moment().format()){
    return {
        type: types.LEAVE_APPSTATE_VIEW,
        currentView: 'appState',
        enterTime: null,
        leaveTime: time
    };
}
