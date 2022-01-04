import { CHANGE_STATUS } from "../actions/type";

const data = {
    updated: false
}

export default function (state = data, action) {
    switch(action.type) {
        case CHANGE_STATUS:
            return { ...state, updated : !state.updated }
            break;
        default:
            return { ...state };
    }
}