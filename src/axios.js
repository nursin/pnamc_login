import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-pnamc-3b849.cloudfunctions.net/api' // THE API (cloud function) URL
});

export default instance;