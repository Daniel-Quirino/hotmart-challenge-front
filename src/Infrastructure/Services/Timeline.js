import axios from 'axios';

export const getTimeline = () => {
    return new Promise((resolve, reject) => {
      axios.get('https://api-front-end-challenge.buildstaging.com/api/timeline')
        .then(async res => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        });
    });    
};

export default getTimeline;