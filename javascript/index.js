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
        <div class="thumb" aria-hidden="true"></div>
        <div>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <a class="read-more" href="post.html?id=${encodeURIComponent(post.id)}">Read more</a>
        </div>
      </article>
    `
    )
    .join("");

