import { blogHeader, squares } from "../../mockData/blogData.js";
import { blogTemplate } from "../templates/blogTemplate.js";

const initBlog = (blogNode) => {
  blogNode.insertAdjacentHTML("beforeend", blogTemplate(blogHeader, squares));
};

export default initBlog;
