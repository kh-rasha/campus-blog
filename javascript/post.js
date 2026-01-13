import { posts } from "./data.js";

const main = document.getElementById("main-content");
const params = new URLSearchParams(window.location.search);
const postId = params.get("id"); // din data har id som "1", "2" (sträng)

if (!postId) {
  main.innerHTML = `
    <article class="post-card">
      <div class="post-body">
        <h1 class="post-title">Inget inlägg valt</h1>
        <p class="post-excerpt">Gå tillbaka till startsidan och välj ett inlägg.</p>
        <a class="read-more" href="index.html">Till startsidan</a>
      </div>
    </article>
  `;
} else {
  const post = posts.find(p => p.id === postId);

  if (!post) {
    main.innerHTML = `
      <article class="post-card">
        <div class="post-body">
          <h1 class="post-title">Inlägget kunde inte hittas</h1>
          <p class="post-excerpt">Kontrollera länken eller gå tillbaka till startsidan.</p>
          <a class="read-more" href="index.html">Till startsidan</a>
        </div>
      </article>
    `;
  } else {
    main.innerHTML = `
      <article class="post-card">
        <div class="post-media">
          <img src="../${post.image}" alt="Bild till ${post.title}">
        </div>

        <div class="post-body">
          <div class="post-meta">
            <span class="badge">${post.category}</span>
            <span>${post.author} • <time datetime="${post.date}">${post.date}</time></span>
          </div>

          <h1 class="post-title">${post.title}</h1>
          <section>${post.content}</section>

          <div style="margin-top: 14px;">
            <a class="read-more" href="index.html">← Tillbaka</a>
          </div>
        </div>
      </article>
    `;
  }
}