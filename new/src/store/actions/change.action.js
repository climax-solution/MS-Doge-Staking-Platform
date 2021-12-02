import { CHANGE_STATUS } from "./type"

export const updateStatus = () => dispatch => {
    dispatch({
        type: CHANGE_STATUS
    });
}