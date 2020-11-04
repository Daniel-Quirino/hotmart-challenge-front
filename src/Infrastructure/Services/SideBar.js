import axios from 'axios';

export const getSideBar = () => {
    return new Promise((resolve, reject) => {
      const URL_SIDEBAR = 'https://api-front-end-challenge.buildstaging.com/api/sidebar';
      axios.get(URL_SIDEBAR)
        .then(async res => {
            resolve(res.data.content);
        }).catch((error) => {
            reject(error);
        });
    });    
};

export default getSideBar;