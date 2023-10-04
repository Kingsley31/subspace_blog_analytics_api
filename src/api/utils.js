import _ from "lodash";

export default class Utils {

    static getTotalBlogCount(blogs) {
        return _.size(blogs);
    }

    static getLongestBlogTitle(blogs) {
        let blogWithLongestTitleIndex = 0;
        let longestTitleCount = 0;
        _.forEach(blogs, function (value, index) {
            if (value.title.length > longestTitleCount) {
                blogWithLongestTitleIndex = index;
                longestTitleCount = value.title.length;
            }
        });
        return blogs[blogWithLongestTitleIndex].title;
    }

    static getNumberBlogTitlesWithPrivacy(blogs) {
        const blogsWithTitleContainingPrivacy = _.filter(blogs, function (blog) { return blog.title.search(/privacy/i) >= 0; });
        return _.size(blogsWithTitleContainingPrivacy);
    }

    static getUniqueBlogTitles(blogs) {
        const blogTitles = _.map(blogs, 'title');
        return _.uniq(blogTitles);
    }

    static filterBlogs({ blogs, searchString }) {
        const regexSearch = new RegExp(searchString, 'i');
        return _.filter(blogs, function (blog) { return blog.title.search(regexSearch) >= 0; });
    }

    static resolveAfterFifteenSeconds(...args) {
        const now = new Date();
        let arg = "stats";
        if (args.length > 0) {
            arg = args[0];
        }
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDay();
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const seconds = Math.floor(now.getSeconds() / 20);
        const key = `${arg}-${year}-${month}-${day}-${hour}-${minutes}-${seconds}`;
        return key;
    }

    static cacheFuncResult(resultFunc) {
        return _.memoize(resultFunc, this.resolveAfterFifteenSeconds);
    }
}