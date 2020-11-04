import { getSideBar } from '../Services/SideBar';

export const doGetSideBar = async (dispatch) => {
  getSideBar().then(sideBar => {
    return dispatch({
      type: 'SIDE_BAR',
      payload: sideBar
    });
  }).catch((error) => {
    return dispatch({
      type: 'REQUEST_ERROR',
      payload: error  
    });
  });
}

export default doGetSideBar;