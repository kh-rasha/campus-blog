import { posts as initialPosts } from "./data.js";

export function getPosts() {
  const stored = localStorage.getItem("posts");
  return stored ? JSON.parse(stored) : initialPosts;
}

export function savePosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}