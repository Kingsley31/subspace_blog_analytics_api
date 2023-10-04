import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();

export default class Repository {
    constructor() { }

    async getAllBlogs() {
        const response = await axios.get(
            "https://intent-kit-16.hasura.app/api/rest/blogs",
            {
                headers: {
                    'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRETE
                }
            });
        return response.data.blogs;
    }
}
