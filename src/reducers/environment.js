import * as types from '../constants/ActionTypes';
const initialState = {
    isShowProgressDialog:false,
    progressValue:0,
    progressDiaoloTitle:''
};
export default function environment(state = initialState, action) {
  switch(action.type) {
    case types.CHANGE_DIALOG_PROGRESS:
        var isShowProgressDialog=false;
        if(action.progress>0&&action.progress<100)
          isShowProgressDialog=true;
        return Object.assign({}, state, {
            progressValue: action.progress,
            progressDiaoloTitle:action.title,
            isShowProgressDialog:isShowProgressDialog
        });
    default:
        return state;
    }
}
