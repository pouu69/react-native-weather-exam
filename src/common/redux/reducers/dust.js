import * as types from '../constants/ActionTypes';

const initialState = {
    isFetchingDust: false,
    data :{
        "id": null,
         "status" : null,
         "statusNum" : 0,
         "locale" : "없음",
         "eachTimeData" : []
    }
}

export default function dust(state = initialState, action){
    switch(action.type){
        case types.START_FETCH_DUST:
            return Object.assign({}, state, {isFetchingDust: true});
        case types.FETCH_DUST:
            return Object.assign({}, state, {
                isFetchingDust: false,
                data: action.data.data,
                msg: action.data.msg,
                code: action.data.code,
                locale: action.data.locale,
                eachTimeData: action.data.eachTimeData
            });
        default:
            return state;
    }
}
