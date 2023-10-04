import Repository from "./repository.js";
import Service from "./service.js";
import Controller from "./controller.js";
import { Route, REQUEST_METHOD } from "./route.js";
import Module from "./module.js";

const repository = new Repository();
const service = new Service(repository);
const controller = new Controller(service);
const blogStatsRoute = new Route({
    requestMethod: REQUEST_METHOD.GET,
    path: "/blog-stats",
    handler: controller.getBlogStats.bind(controller)
});
const filterBlogRoute = new Route({
    requestMethod: REQUEST_METHOD.GET,
    path: "/blog-search",
    handler: controller.searchBlog.bind(controller)
});
const routes = [blogStatsRoute, filterBlogRoute];
const BlogModule = new Module({ routes: routes, path: "/api" });
// service.filterBlogs("netflix");
// service.getBlogAnalytics();

export default BlogModule;