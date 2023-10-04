import BlogApp from "./src/index.js";
import dotenv from 'dotenv'
dotenv.config();

const port = process.env.PORT;
const server = BlogApp.bootstrap();
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});