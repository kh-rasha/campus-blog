// javascript/post.js
import { getPosts } from "./storage.js";
const posts = getPosts();

const main = document.getElementById("main-content");
if (!main) throw new Error('Missing element with id="main-content" in post.html');

const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

function renderMessage(title, text, backHref) {
  main.innerHTML = `
    <article class="post post--single">
      <div>
        <h3>${title}</h3>
        <p>${text}</p>
        <p><a href="${backHref}">← Back to home</a></p>
      </div>
    </article>
  `;
}

if (!postId) {
  renderMessage("No post selected", "Go back and choose a post.", "index.html");
} else {
  const post = posts.find((p) => String(p.id) === String(postId));

  if (!post) {
    renderMessage("Post not found", "Check the link or go back to the homepage.", "index.html");
  } else {
    const imageSrc = post.image.startsWith("../") ? post.image : `../${post.image}`;
    document.title = `${post.title} - Campus Blog`;



    // Example of responsive image setup if multiple sizes exist:
// <img
//   src="../images/news-800.jpg"
//   srcset="
//     ../images/news-400.jpg 400w,
//     ../images/news-800.jpg 800w,
//     ../images/news-1600.jpg 1600w
//   "
//   sizes="(max-width: 600px) 90vw, 800px"
//   alt="Responsive blog image"
// />
    main.innerHTML = `
      <article class="post post--single">


      <img src="${imageSrc}" alt="Image for ${post.title}" />
        

        <div>
          <p><strong>${post.author}</strong> • <time datetime="${post.date}">${post.date}</time> • ${post.category}</p>
          <h3>${post.title}</h3>
          <div>${post.content}</div>
          <p style="margin-top: 12px;"><a href="index.html">← Back</a></p>
        </div>
      </article>
    `;
  }
}