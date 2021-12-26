import github from "./github";
import { decode } from "./encoder";

export const getCategoryList = (type) => github.get(`/${type}`);
export const getPostList = (type, category) => github.get(`/${type}/${category}`);
export const getPostContent = (type, category, id) => github.get(`/${type}/${category}/${id}/content.md`).then(response => decode(response.data.content));
export const getPostImage = (type, category, postId, imageId) => github.get(`/${type}/${category}/${postId}/${imageId}`);