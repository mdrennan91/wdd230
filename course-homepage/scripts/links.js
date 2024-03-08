const linksURL = "https://mdrennan91.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
  } catch (error) {
    console.error("Fetching error:", error);
  }
}

function displayLinks(weeks) {
  const container = document.querySelector('.card ul'); 
  container.innerHTML = ''; 
  weeks.forEach(week => {
    const listItem = document.createElement('li');
    let weekSpan = `<span>Week ${week.lesson}:</span> `;
    let linksHTML = week.links.map(link => link.url ? `<a href="${link.url}" target="_blank">${link.title}</a>` : '').join(' | ');
    listItem.innerHTML = weekSpan + linksHTML;
    container.appendChild(listItem);
  });
}

getLinks();