// javascript/post.js
import { posts } from "./data.js";

const main = document.getElementById("main-content");

if (!main) {
  throw new Error('Missing element with id="main-content" in post.html');
}

const params = new URLSearchParams(window.location.search);
const postId = params.get("id"); // returns string or null

function renderMessage(title, text, backHref) {
  main.innerHTML = `
    <article class="post-card">
      <div class="post-body">
        <h1 class="post-title">${title}</h1>
        <p class="post-excerpt">${text}</p>
        <a class="read-more" href="${backHref}">Back to home</a>
      </div>
    </article>
  `;
}

// 1) No id provided
if (!postId) {
  // post.html is inside /html, so home is index.html in same folder
  renderMessage("No post selected", "Go back and choose a post.", "index.html");
} else {
  // Your ids are strings in data.js ("1","2",...) so compare as strings
  const post = posts.find((p) => String(p.id) === String(postId));

  // 2) Post not found
  if (!post) {
    renderMessage("Post not found", "Check the link or go back to the homepage.", "index.html");
  } else {
    // IMPORTANT: post.html is in /html, images folder is at project root
    // So image paths should start with "../images/..."
    const imageSrc = post.image.startsWith("../") ? post.image : `../${post.image}`;

    document.title = `${post.title} - Campus Blog`;

    // 3) Render post
    main.innerHTML = `
      <article class="post-card">
        <div class="post-media">
          <img src="${imageSrc}" alt="Image for ${post.title}">
        </div>

        <div class="post-body">
          <div class="post-meta">
            <span class="badge">${post.category}</span>
            <span>${post.author} • <time datetime="${post.date}">${post.date}</time></span>
          </div>

          <h1 class="post-title">${post.title}</h1>

          <section class="post-content">
            ${post.content}
          </section>

          <a class="read-more" href="index.html">← Back</a>
        </div>
      </article>
    `;
  }
}
