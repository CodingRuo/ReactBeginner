import axios, { CanceledError } from "axios";

const $api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export { $api, CanceledError }