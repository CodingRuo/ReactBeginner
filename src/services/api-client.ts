import axios from "axios";

const $api = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2ce9201f936640b69f8f198f0c34feae'
    }
});

export { $api }