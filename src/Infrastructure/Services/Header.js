import axios from 'axios';

export const getHeader = () => {
    return new Promise((resolve, reject) => {
      axios.get('https://api-front-end-challenge.buildstaging.com/api/header')
        .then(async res => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        });
    });    
};

export default getHeader;