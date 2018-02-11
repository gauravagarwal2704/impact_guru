import axios from 'axios';

const api = {
  fetchPrices:()=>{
        return axios.get('./data.json')
        .then(response => {
          return response.data;
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
  }
};

export default api;
