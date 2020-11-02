import axios from 'axios';

export const getHeader = () => {
    return new Promise((resolve, reject) => {
      const URL_HEADER = 'https://api-front-end-challenge.buildstaging.com/api/header';

      axios.get(URL_HEADER)
        .then(async res => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        });
    });    
};

export default getHeader;