import { $api } from "./api-client";

interface Entity {
    id: number;
}

class HTTPService {

    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>() {
        const controller = new AbortController();

        const request = $api
            .get<T[]>(this.endpoint, {
                signal: controller.signal,
            });

        return { request, cancel: () => controller.abort() }
    }

    delete<T>(id: number) {
        return $api.delete<T>(this.endpoint + "/" + id)
    }

    create<T>(entity: T) {
        return $api.post<T>(this.endpoint, entity)
    }

    update<T extends Entity>(entity: T) {
        return $api.patch<T>(this.endpoint + "/" + entity.id, entity)
    }
}

const create = (endpoint: string) => new HTTPService(endpoint);

export default create;