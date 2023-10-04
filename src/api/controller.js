import Utils from "./utils.js";

export default class Controller {
    service;

    constructor(service) {
        this.service = service;
    }

    async getBlogStats(req, res, next) {
        try {
            const getCachedBlogAnalytics = Utils.cacheFuncResult(this.service.getBlogAnalytics.bind(this.service));
            const stats = await getCachedBlogAnalytics();
            return res.status(200).json({ data: stats });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }

    async searchBlog(req, res, next) {
        let querString = req.query.query;
        if (!querString) {
            return res.status(400).json({
                message: "query string is expected and shoudn't be empty"
            });
        }
        try {
            const getCachedFilteredBlogs = Utils.cacheFuncResult(this.service.filterBlogs.bind(this.service));
            const foundBlogs = await getCachedFilteredBlogs(querString);
            return res.status(200).json({
                data: foundBlogs
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }

}

