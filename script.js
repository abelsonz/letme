document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-input').focus();
    addEventListenersToLogos();
    addEnterKeyListener();
});

function addEnterKeyListener() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
}

document.getElementById('search-button').addEventListener('click', performSearch);


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-input').focus();
});


function addEventListenersToLogos() {
    const logoElements = document.querySelectorAll('.logo');

    logoElements.forEach(logo => {
        logo.addEventListener('click', function() {
            selectLogo(logo.id);
        });
    });
}

function selectLogo(logoId) {
    document.querySelectorAll('.logo').forEach(logo => {
        logo.classList.remove('selected');
    });
    document.getElementById(logoId).classList.add('selected');
}

function performSearch() {
    const query = document.getElementById('search-input').value.trim();
    const searchQuery = query.split(' ').join('+');
    const selectedLogo = document.querySelector('.logo.selected');

    if (selectedLogo) {
        const baseUrls = {
            'amazon-logo': 'https://www.amazon.com/s?k=',
            'youtube-logo': 'https://www.youtube.com/results?search_query=',
            'yelp-logo': 'https://www.yelp.com/search?find_desc=',
            'ebay-logo': 'https://www.ebay.com/sch/i.html?_nkw=',
            'etsy-logo': 'https://www.etsy.com/search?q=',
            'tripadvisor-logo': 'https://www.tripadvisor.com/search?q=',
            'indeed-logo': 'https://www.indeed.com/jobs?q=',
            'webmd-logo': 'https://www.webmd.com/search/search_results/default.aspx?query=',
            'reddit-logo': 'https://www.reddit.com/search/?q=',
            'googlemaps-logo': 'https://www.google.com/maps/search/',
            'wikipedia-logo': 'https://en.wikipedia.org/wiki/Special:Search/',
            'pinterest-logo': 'https://www.pinterest.com/search/pins/?q=',
            'imdb-logo': 'https://www.imdb.com/find?q=',
            'github-logo': 'https://www.github.com/saerch?q=',
            'spotify-logo': 'https://open.spotify.com/search/',
            'allrecipes-logo': 'https://www.allrecipes.com/search?q=',
            'goodreads-logo': 'https://www.goodreads.com/search?q=',
            'craigslist-logo': 'https://www.craigslist.org/search/sss?query=',
            'carsandbids-logo': 'https://carsandbids.com/search/?q=',
            'theverge-logo': 'https://www.theverge.com/search?q='
        };

        const baseUrl = baseUrls[selectedLogo.id];
        if (baseUrl) {
            window.location.href = baseUrl + searchQuery;
        } else {
            alert('Invalid search platform selected.');
        }
    } else {
        alert('Please select a search platform.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-input').focus();
    addEventListenersToLogos();
});

document.getElementById('search-button').addEventListener('click', performSearch);
