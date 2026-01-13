// js/index.js
import { posts } from './data.js';

const container = document.getElementById('posts');

// Loop through all posts and create HTML for each
posts.forEach(post => {
  const article = document.createElement('article');
  article.className = 'post-card';

  article.innerHTML = `
    <img src="${post.image}" alt="Image for ${post.title}">
    <div class="post-content">
      <h2>${post.title}</h2>
      <p class="meta">${post.date} · ${post.author} · ${post.views} views</p>
      <p>${post.excerpt}</p>
      <a class="read-more" href="post.html?id=${post.id}">Read more →</a>
    </div>
  `;

  container.appendChild(article);
});