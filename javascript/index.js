// javascript/index.js
import { getPosts } from "./storage.js";
const posts = getPosts();

/* ---------- Featured Post ---------- */
const featuredTitle = document.getElementById("featuredTitle");
const featuredExcerpt = document.getElementById("featuredExcerpt");
const featuredLink = document.getElementById("featuredLink");
const featuredMedia = document.getElementById("featuredMedia");

// Pick newest post as featured
const featuredPost = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))[0];

if (featuredPost && featuredTitle && featuredExcerpt && featuredLink && featuredMedia) {
    featuredTitle.textContent = featuredPost.title;
    featuredExcerpt.textContent = featuredPost.excerpt;
    featuredLink.href = `post.html?id=${encodeURIComponent(featuredPost.id)}`;

    // Set featured image as background of the xbox box
    featuredMedia.style.backgroundImage = `url(../${featuredPost.image})`;
    featuredMedia.style.backgroundSize = "cover";
    featuredMedia.style.backgroundPosition = "center";
}

/* ---------- Recent Posts ---------- */
const postsSection = document.querySelector("#posts");
if (!postsSection) {
    throw new Error('Element with id="posts" not found in index.html');
}

// Sort posts by date (newest first) for recent list
const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

postsSection.innerHTML = sortedPosts
    .map(
        (post) => `
      <article class="post-card">
        <img
          class="thumb"
          src="../${post.image}"
          alt="${post.title}"
          loading="lazy"
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

