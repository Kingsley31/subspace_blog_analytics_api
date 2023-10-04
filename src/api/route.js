
export const REQUEST_METHOD = {
    PUT: 'PUT',
    POST: 'POST',
    GET: 'GET',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
};

export class Route {
    requestMethod;
    path;
    handler;

    constructor({ requestMethod, path, handler }) {
        this.requestMethod = requestMethod;
        this.path = path;
        this.handler = handler;
    }

    getRequestMethod() {
        return this.requestMethod;
    }
    getPath() {
        return this.path;
    }

    getHandler() {
        return this.handler;
    }
}