import { posts } from "./data.js";

const postsSection = document.querySelector("#posts");
if (!postsSection) {
    throw new Error('Element with id="posts" not found');
}

postsSection.innerHTML = posts
    .map(
        (post) => `
      <article class="post-card">
        <img 
          class="thumb"
          src="../${post.image}" 
          alt="${post.title}"
        />

        <div>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <a class="read-more" href="post.html?id=${encodeURIComponent(post.id)}">
            Read more
          </a>
        </div>
      </article>
    `
    )
    .join("");
