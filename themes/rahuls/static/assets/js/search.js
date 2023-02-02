const searchInput = document.querySelector('#search-input');

const params = new URLSearchParams(window.location.search);
const query = params.get('query');

if (searchInput) {
  searchInput.value = query;

  searchContent(query);

  searchInput.addEventListener(
    'keyup',
    debounce((e) => {
      if (e.key == 'Enter') {
        const query = e.target.value;
        // Perform a search if there is a query
        searchContent(query);
      }
    }, 250)
  );
}

function searchContent(query) {
  if (query) {
    // Retain the search input in the form when displaying results
    document.getElementById('search-input').setAttribute('value', query);

    const idx = lunr(function () {
      this.ref('id');
      this.field('title', {
        boost: 15,
      });

      for (const key in window.store) {
        this.add({
          id: key,
          title: window.store[key].title,
          thumbnail: window.store[key].thumbnail,
          url: window.store[key].url,
          authorName: window.store[key].authorName,
          authorImage: window.store[key].authorImage,
          date: window.store[key].date,
        });
      }
    });

    // Perform the search
    const results = idx.search(query);

    console.log(results);
    // Update the list with results
    displayResults(results, window.store);
  }
}

function displayResults(results, store) {
  const searchResults = document.querySelector('#results');
  if (results.length) {
    let resultList = '';
    // Iterate and build result list elements
    for (const n in results) {
      const item = store[results[n].ref];
      resultList += `
        <article class="post-card">
          <a href="${
            item.url
          }" class="block relative rounded-lg aspect-[15/9] w-full overflow-hidden">
            <img class="w-full h-full object-cover" src="${item.thumbnail}" alt="${item.title}" />
          </a>
          <a href="${item.url}" class="text-primary text-xl font-bold my-5 line-clamp-3">${
        item.title
      }</a>
          <div class="flex items-center gap-x-4">
            <img src="${
              item.authorImage
            }" class="rounded-full w-[44px] md:w-[55px] aspect-square object-cover" alt="${
        item.authorName
      }">
            <div>
              <h3 class="font-bold mb-2 text-sm md:text-base">${item.authorName}</h3>
              <div class="flex items-center gap-x-2 text-xs md:text-sm text-gray">
                <time>${item.date}</time>
                -
                <p>  ${Math.floor(item.readTime)} Mins Read</p>
              </div>
            </div>
          </div>
        </article>
      `;
    }
    searchResults.innerHTML = resultList;
  } else {
    searchResults.innerHTML = 'No results found.';
  }
}

function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    let context = this;
    let args = arguments;

    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}
