import axios from 'axios';

export default class Base {
  constructor(props) {
    this.axios = axios.create({
      baseURL: 'http://localhost:3307',
      headers: {
        // username: 'ABC',
        // password: 'ABC',
        'ngrok-skip-browser-warning': '69420',
        'Access-Control-Allow-Origin': '*',
        // 'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Access-Control-Max-Age': '86400',
        // 'Access-Control-Expose-Headers': 'Content-Length, X-JSON',
      },
    });
  }
}
