// js/data.js
export const posts = [
    {
        id: "1",
        title: "How to Organize Your Week as a Fullstack Student",
        excerpt: "A simple weekly structure to balance Java, Frontend, and assignments.",
        content: `
      <p>One of the biggest challenges for fullstack students is time management.</p>
      <p>Try dividing your week into clear focus blocks.</p>
      <ul>
        <li>Day 1: Learning</li>
        <li>Day 2: Practice</li>
        <li>Day 3: Review & Refactor</li>
      </ul>
    `,
        author: "Campus Blog Team",
        date: "2026-01-05",
        category: "Study",
        image: {
            small: "images/post1-400.jpg",
            medium: "images/post1-800.jpg",
            large: "images/post1-1600.jpg"
            },
        views: 220
    },
    {
        id: "2",
        title: "Responsive Design Without Frameworks",
        excerpt: "Mobile-first layout using only CSS Grid and Flexbox.",
        content: `
      <p>Start with mobile as your base layout.</p>
      <p>Then scale up using media queries.</p>
    `,
        author: "Campus Blog Team",
        date: "2026-01-06",
        category: "Frontend",
        image: "images/news.jpg",
        views: 180
    },
    {
        id: "3",
        title: "JavaScript DOM Rendering Explained Simply",
        excerpt: "Understanding how JavaScript updates the DOM in a clean and readable way.",
        content: `
    <p>The DOM (Document Object Model) allows JavaScript to dynamically update HTML.</p>
    <p>In this project, we render blog posts using template strings and innerHTML.</p>
    <p>This approach is acceptable because the data is hardcoded and not user-generated.</p>
  `,
        author: "Campus Blog Team",
        date: "2026-01-07",
        category: "JavaScript",
        image: "images/news.jpg",
        views: 310
    },
    {
        id: "4",
        title: "Accessibility Basics Every Frontend Student Should Know",
        excerpt: "Small accessibility decisions that make a big difference.",
        content: `
    <p>Accessibility is not optional – it is part of good frontend development.</p>
    <p>Always use semantic HTML and make sure your site works with keyboard navigation.</p>
    <p>Visible focus states and proper contrast are essential.</p>
  `,
        author: "Campus Blog Team",
        date: "2026-01-08",
        category: "Accessibility",
        image: "images/news.jpg",
        views: 190
    },
    {
        id: "5",
        title: "How Query Parameters Work in JavaScript",
        excerpt: "Learn how to read ?id= values from the URL using modern JavaScript.",
        content: `
    <p>Query parameters allow pages to receive data through the URL.</p>
    <p>JavaScript provides the URLSearchParams API to read them easily.</p>
    <p>This is how our blog knows which post to display.</p>
  `,
        author: "Campus Blog Team",
        date: "2026-01-09",
        category: "JavaScript",
        image: "images/news.jpg",
        views: 420
    },
    {
        id: "6",
        title: "Mobile-First Design: Why It Matters",
        excerpt: "Designing for mobile first improves usability on all devices.",
        content: `
    <p>Mobile-first means starting with the smallest screen.</p>
    <p>Once the mobile layout works well, you enhance it for larger screens.</p>
    <p>This results in cleaner and more focused designs.</p>
  `,
        author: "Campus Blog Team",
        date: "2026-01-10",
        category: "Frontend",
        image: "images/news.jpg",
        views: 260
    },
    {
        id: "7",
        title: "Common Git Mistakes Students Make",
        excerpt: "Avoid these common Git issues when working in a team.",
        content: `
    <p>One common mistake is committing directly to the main branch.</p>
    <p>Always work on feature branches and merge when the feature is complete.</p>
    <p>Clear commit messages also make collaboration easier.</p>
  `,
        author: "Campus Blog Team",
        date: "2026-01-11",
        category: "Git",
        image: "images/news.jpg",
        views: 150
    },
    {
        id: "8",
        title: "Handling Errors Gracefully in JavaScript",
        excerpt: "How to show user-friendly error messages instead of broken pages.",
        content: `
    <p>Good error handling improves user experience.</p>
    <p>If a blog post does not exist, show a clear message instead of crashing.</p>
    <p>This is a requirement in your current assignment.</p>
  `,
        author: "Campus Blog Team",
        date: "2026-01-12",
        category: "JavaScript",
        image: "images/news.jpg",
        views: 280
    }



];
