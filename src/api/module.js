import express from "express";
import { REQUEST_METHOD } from "./route.js";

export default class Module {
    routes;
    expressRouter;
    path;

    constructor({ routes, path }) {
        this.expressRouter = express.Router();
        this.routes = routes;
        this.path = path;
        this.registerRoutes();
    }

    registerRoutes() {
        this.routes.forEach(route => {
            switch (route.getRequestMethod()) {
                case REQUEST_METHOD.GET:
                    this.expressRouter.get(route.getPath(), route.getHandler());
                    break;
                case REQUEST_METHOD.POST:
                    this.expressRouter.post(route.getPath(), route.getHandler());
                    break;
                case REQUEST_METHOD.PUT:
                    this.expressRouter.put(route.getPath(), route.getHandler());
                    break;
                case REQUEST_METHOD.PATCH:
                    this.expressRouter.patch(route.getPath(), route.getHandler());
                    break;
                case REQUEST_METHOD.DELETE:
                    this.expressRouter.delete(route.getPath(), route.getHandler());
                    break;
                default:
                    break;
            }
        });
        return this.expressRouter;
    }

    getRouter() {
        return this.expressRouter;
    }

    getPath() {
        return this.path;
    }
}