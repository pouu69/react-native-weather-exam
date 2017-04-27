import * as types from '../constants/ActionTypes';

const initialState = {
  currentView:  'not set',
  enterTime:    null,
  leaveTime:    null
};

export default function(state = initialState, action){
    switch (action.type) {
        case types.ENTER_HOME_VIEW:
        case types.ENTER_APPSTATE_VIEW:
            if(state.currentView !== action.currentView){
                return Object.assign({}, state, {
                    currentView: action.currentView,
                    enterTime: action.enterTime
                });
            }
            return state;
        case types.LEAVE_HOME_VIEW:
        case types.LEAVE_APPSTATE_VIEW:
            if(state.currentView === action.currentView){
                return Object.assign({}, state, {
                    currentView: action.currentView,
                    leaveTime: action.leaveTime
                });
            }
            return state;
        default:
            return state;
    }
}
