import * as types from '../constants/ActionTypes';
import * as APIs from '../constants/APIs';

function shouldFetchDust(state){
    const dust = state.dust;

    if(dust && dust.isFetchingDust){
        return false;
    }

    return true;
}

export function fetchDust(lastPosition){
    return async (dispatch, getState) => {
        if(!shouldFetchDust(getState())){
            return Promise.resolve();
        }

        dispatch({type: types.START_FETCH_DUST});

        const response = await fetch(APIs.fetchDust);
        const data = await response.json();

        return dispatch({
            type: types.FETCH_DUST,
            data
        });
    }
}
