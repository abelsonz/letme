document.getElementById('amazon-logo').addEventListener('click', function() {
    selectLogo('amazon-logo');
});

document.getElementById('youtube-logo').addEventListener('click', function() {
    selectLogo('youtube-logo');
});

// Add event listeners for Yelp, eBay, and Etsy logos
document.getElementById('yelp-logo').addEventListener('click', function() {
    selectLogo('yelp-logo');
});

document.getElementById('ebay-logo').addEventListener('click', function() {
    selectLogo('ebay-logo');
});

document.getElementById('etsy-logo').addEventListener('click', function() {
    selectLogo('etsy-logo');
});

document.getElementById('tripadvisor-logo').addEventListener('click', function() {
    selectLogo('tripadvisor-logo');
});

document.getElementById('indeed-logo').addEventListener('click', function() {
    selectLogo('indeed-logo');
});

document.getElementById('webmd-logo').addEventListener('click', function() {
    selectLogo('webmd-logo');
});

document.getElementById('search-button').addEventListener('click', function() {
    performSearch();
});

document.getElementById('reddit-logo').addEventListener('click', function() {
    selectLogo('reddit-logo');
});

document.getElementById('googlemaps-logo').addEventListener('click', function() {
    selectLogo('googlemaps-logo');
});

document.getElementById('wikipedia-logo').addEventListener('click', function() {
    selectLogo('wikipedia-logo');
});

document.getElementById('pinterest-logo').addEventListener('click', function() {
    selectLogo('pinterest-logo');
});

document.getElementById('imdb-logo').addEventListener('click', function() {
    selectLogo('imdb-logo');
});

document.getElementById('github-logo').addEventListener('click', function() {
    selectLogo('github-logo');
});

document.getElementById('spotify-logo').addEventListener('click', function() {
    selectLogo('spotify-logo');
});

document.getElementById('allrecipes-logo').addEventListener('click', function() {
    selectLogo('allrecipes-logo');
});

document.getElementById('goodreads-logo').addEventListener('click', function() {
    selectLogo('goodreads-logo');
});

document.getElementById('craigslist-logo').addEventListener('click', function() {
    selectLogo('craigslist-logo');
});

document.getElementById('carsandbids-logo').addEventListener('click', function() {
    selectLogo('carsandbids-logo');
});

document.getElementById('theverge-logo').addEventListener('click', function() {
    selectLogo('theverge-logo');
});

function selectLogo(logoId) {
    document.querySelectorAll('.logo').forEach(logo => logo.classList.remove('selected'));
    document.getElementById(logoId).classList.add('selected');
}

function performSearch() {
    const query = document.getElementById('search-input').value.trim();
    const searchQuery = query.split(' ').join('+');
    const selectedLogo = document.querySelector('.logo.selected');

    if (selectedLogo) {
        let baseUrl;
        switch (selectedLogo.id) {
            case 'amazon-logo':
                baseUrl = 'https://www.amazon.com/s?k=';
                break;
            case 'youtube-logo':
                baseUrl = 'https://www.youtube.com/results?search_query=';
                break;
            case 'yelp-logo':
                baseUrl = 'https://www.yelp.com/search?find_desc=';
                break;
            case 'ebay-logo':
                baseUrl = 'https://www.ebay.com/sch/i.html?_nkw=';
                break;
            case 'etsy-logo':
                baseUrl = 'https://www.etsy.com/search?q=';
                break;
            case 'tripadvisor-logo':
                baseUrl = 'https://www.tripadvisor.com/search?q=';
                break;
            case 'indeed-logo':
                baseUrl = 'https://www.indeed.com/jobs?q=';
                break;
            case 'webmd-logo':
                baseUrl = 'https://www.webmd.com/search/search_results/default.aspx?query=';
                break;
            case 'reddit-logo':
                baseUrl = 'https://www.reddit.com/search/?q=';
                break;
            case 'googlemaps-logo':
                baseUrl = 'https://www.google.com/maps/search/';
                break;
            case 'wikipedia-logo':
                baseUrl = 'https://en.wikipedia.org/wiki/Special:Search/';
                break;
            case 'pinterest-logo':
                baseUrl = 'https://www.pinterest.com/search/pins/?q=';
                break;
            case 'imdb-logo':
                baseUrl = 'https://www.imdb.com/find?q=';
                break;
            case 'github-logo':
                baseUrl = 'https://github.com/search?q=';
                break;
            case 'spotify-logo':
                baseUrl = 'https://open.spotify.com/search/';
                break;
            case 'allrecipes-logo':
                baseUrl = 'https://www.allrecipes.com/search?q=';
                break;
            case 'goodreads-logo':
                baseUrl = 'https://www.goodreads.com/search?q=';
                break;
            case 'craigslist-logo':
                baseUrl = 'https://www.craigslist.org/search/sss?query=';
                break;
            case 'carsandbids-logo':
                baseUrl = 'https://carsandbids.com/search/?q=';
                break;
            case 'theverge-logo':
                baseUrl = 'https://www.theverge.com/search?q=';
                break;
        }
        window.location.href = baseUrl + searchQuery;
    }
}
