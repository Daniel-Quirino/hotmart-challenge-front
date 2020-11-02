import axios from 'axios';

export const getTimeline = () => {
    return new Promise((resolve, reject) => {
      const URL_TIMELINE = 'https://api-front-end-challenge.buildstaging.com/api/timeline';

      axios.get(URL_TIMELINE)
        .then(async res => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        });
    });    
};

export default getTimeline;