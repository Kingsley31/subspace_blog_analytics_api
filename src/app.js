import express from "express";

export default class Application {
    modules;
    globalMiddlewares;
    expressServer;

    constructor({ modules, globalMiddlewares }) {
        this.expressServer = express();
        this.modules = modules;
        this.globalMiddlewares = globalMiddlewares;
    }

    bootstrap() {
        //Register Modules
        this.modules.forEach(module => {
            this.expressServer.use(module.getPath(), module.getRouter());
        });
        //Register Global Middlewares
        this.globalMiddlewares.forEach(middleware => {
            this.expressServer.use(middleware);
        });
        return this.expressServer;
    }

}