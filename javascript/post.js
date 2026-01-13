const main = document.getElementById("main-content");

// Hämta id från URL
const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

// Om inget id finns
if (!postId) {
  main.innerHTML = "<p>Inget inlägg valt.</p>";
} else {
  const post = posts.find(p => p.id === Number(postId));

  // Om id inte matchar något inlägg
  if (!post) {
    main.innerHTML = "<p>Inlägget kunde inte hittas.</p>";
  } else {
    main.innerHTML = `
      <article>
        <h1>${post.title}</h1>
        <p>
          <strong>${post.author}</strong> • 
          <time datetime="${post.date}">${post.date}</time>
        </p>

        <img src="${post.image}" alt="Bild till ${post.title}" />

        <section>
          <p>${post.content}</p>
        </section>
      </article>
    `;
  }
}