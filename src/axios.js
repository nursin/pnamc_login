import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-wurklo.cloudfunctions.net/api' // THE API (cloud function) URL
});

export default instance;