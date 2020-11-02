import { getTimeline } from '../Services/Timeline';

export const doGeTimeline = async (dispatch) => {
  getTimeline().then(timeline => {
        return dispatch({
            type: 'TIMELINE',
            payload: timeline
        });
    }).catch((error) => {
        return dispatch({
            type: 'REQUEST_ERROR',
            payload: error  
        });
    });
}

export default doGeTimeline;