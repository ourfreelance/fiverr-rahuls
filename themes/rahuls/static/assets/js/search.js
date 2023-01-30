const searchInput = document.querySelector('#search-input');

const params = new URLSearchParams(window.location.search)
const query = params.get('query')

searchInput.value = query

searchContent(query)

searchInput.addEventListener('keyup', debounce((e) => {
  if(e.key == 'Enter') {
    const query = e.target.value
    // Perform a search if there is a query
    searchContent(query)
  }
}, 250))


function searchContent(query) {
  if (query) {
    // Retain the search input in the form when displaying results
    document.getElementById('search-input').setAttribute('value', query)

    const idx = lunr(function () {
      this.ref('id')
      this.field('title', {
        boost: 15
      })

      for (const key in window.store) {
        this.add({
          id: key,
          title: window.store[key].title,
          thumbnail: window.store[key].thumbnail,
          url: window.store[key].url,
          url_visit_web: window.store[key].url_visit_web
        })
      }
    })

    // Perform the search
    const results = idx.search(query)

    console.log(results);
    // Update the list with results
    displayResults(results, window.store)
  } 
}

function displayResults (results, store) {
  const searchResults = document.querySelector('#results')
  if (results.length) {
    let resultList = ''
    // Iterate and build result list elements
    for (const n in results) {
      const item = store[results[n].ref]
      resultList += `
        <article class="post-card relative rounded-lg">
          <img class="w-full h-full object-cover" src="${item.thumbnail}" alt="${item.title}">
          <div class="absolute flex items-center gap-x-3 bottom-2 md:bottom-6 right-2 md:right-6 bg-transparent md:bg-light p-3.5 rounded-lg">
            <a href="${item.url}" class="flex items-center gap-x-3 p-4 w-full md:w-auto text-center rounded-lg bg-white text-primary text-sm md:text-base font-medium hover:opacity-90 transition">
              <img src="/assets/images/icons/book.svg" alt="view case study">
              <span class="hidden md:block">View Case Study</span>
            </a>
            <a href="${item.url}" class="flex items-center gap-x-3 p-4 w-full md:w-auto text-center rounded-lg bg-primary text-white text-sm md:text-base font-medium hover:opacity-90 transition">
              <img src="/assets/images/icons/link.svg" alt="visit website">
              <span class="hidden md:block">Visit Website</span>
            </a>
          </div>
          
        </article>
      `
    }
    searchResults.innerHTML = resultList
  } else {
    searchResults.innerHTML = 'No results found.'
  }
}

function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    let context = this;
    let args = arguments;
	    
    let later = function() {  
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;
	
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
	
    if (callNow) func.apply(context, args);
  };
};