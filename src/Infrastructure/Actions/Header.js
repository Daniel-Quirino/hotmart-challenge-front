import { getHeader } from '../Services/Header';

export const doGetHeader = async (dispatch) => {
    getHeader().then(header => {
        return dispatch({
            type: 'HEADER',
            payload: header
        });
    }).catch((error) => {
        return dispatch({
            type: 'REQUEST_ERROR',
            payload: error  
        });
    });
}

export default doGetHeader;