import Utils from "./utils.js";


export default class Service {
    repository;

    constructor(repository) {
        this.repository = repository;
    }

    async getBlogAnalytics() {
        const blogs = await this.repository.getAllBlogs();
        const analytics = {
            blogs_count: Utils.getTotalBlogCount(blogs),
            longest_blog_title: Utils.getLongestBlogTitle(blogs),
            blog_titles_with_privacy_count: Utils.getNumberBlogTitlesWithPrivacy(blogs),
            unique_blog_titles: Utils.getUniqueBlogTitles(blogs)
        };
        return analytics;
    }

    async filterBlogs(searchString) {
        const blogs = await this.repository.getAllBlogs();
        const blogsWithContainingSearchString = Utils.filterBlogs({ blogs: blogs, searchString: searchString });
        return blogsWithContainingSearchString;
    }
}
