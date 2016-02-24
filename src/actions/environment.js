import * as types from '../constants/ActionTypes';

export function reportProgress(progress,title){
    return {
        type: types.CHANGE_DIALOG_PROGRESS,
        progress,
        title
    };
}