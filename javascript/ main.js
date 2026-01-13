// javascript/main.js
import { posts } from "./data.js";

const postsSection = document.querySelector("#posts");

if (!postsSection) {
    throw new Error('Element with id="posts" not found in index.html');
}

postsSection.innerHTML = posts
    .map(
        (post) => `
      <article class="post-card">
        <h2>${post.title}</h2>
        <p>${post.excerpt}</p>
        <a href="post.html?id=${encodeURIComponent(post.id)}">Read more</a>
      </article>
    `
    )
    .join("");
