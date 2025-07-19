
fetch('news.json')
  .then(response => response.json())
  .then(newsItems => {
    const container = document.getElementById('news-container');
    newsItems.forEach(item => {
      const card = document.createElement('div');
      card.className = 'news-card';
      card.innerHTML = `
  <div class="tag">${item.tag}</div>
  <h2>${item.title}</h2>
  <p><strong>${item.date}</strong></p>
  <p>${item.summary}</p>
  <a href="${item.link}" target="_blank">Read More →</a>
`;
      `;
      container.appendChild(card);
    });
  });
