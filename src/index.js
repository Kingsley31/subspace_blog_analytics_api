import Application from "./app.js";
import BlogModule from "./api/index.js";
import cors from 'cors';
import morgan from "morgan";

const globalMiddlewares = [cors(), morgan('tiny')];
const modules = [BlogModule];
const BlogApp = new Application({
    modules: modules,
    globalMiddlewares: globalMiddlewares
});
export default BlogApp;

