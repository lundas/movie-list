import axios from 'axios';
import { API_KEY } from '../config/config.js'

const url = '/api/movies'

var getMovieData = (callback) => {
  axios.get(url)
    .then((response) => {
      callback(response);
    })
    .catch((err) => {
      console.log('Error getting Movie Data: ', err);
      // callback(err);
    })
}


export default getMovieData;