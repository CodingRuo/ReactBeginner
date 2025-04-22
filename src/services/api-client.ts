import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
    next: string | null;
}

const $api = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2ce9201f936640b69f8f198f0c34feae'
    }
});

class APICLient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return $api.get<FetchResponse<T>>(this.endpoint, config)
            .then(({ data }) => data)
    }

    get = (id: string | number) => {
        return $api.get<T>(this.endpoint + '/' + id)
            .then(({ data }) => data)
    }
}

export default APICLient