const time = document.getElementById('time');
var date = new Date();
time.innerHTML = date.toLocaleDateString('en-UK', { weekday:"short", year:"numeric", month:"numeric", day:"numeric"}) ;


const clickSound = document.getElementById('click-sound');

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        clickSound.play();
    });
});

function saveFilters() {
    var filters = {
        genre: getSelectedValues('genre'),
        platform: getSelectedValues('platform'),
        releaseDate: getSelectedValues('release-date'),
        gameMode: getSelectedValues('game-mode'),
        priceRange: getSelectedValues('price-range')
    };
    localStorage.setItem('filters', JSON.stringify(filters));
}
function loadFilters() {
    var savedFilters = JSON.parse(localStorage.getItem('filters'));
    if (savedFilters) {
        Object.keys(savedFilters).forEach(filterName => {
            savedFilters[filterName].forEach(value => {
                var checkbox = document.querySelector(`input[name="${filterName}"][value="${value}"]`);
                if (checkbox) checkbox.checked = true;
            });
        });
        filterGames(); 
    }
}

function displayGames(filteredGames) {
    var gameList = document.getElementById('game-list');
    gameList.innerHTML = ""; 
    var i = 0;
    filteredGames.forEach((game) => {
        gameList.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 mb-4 game-w" id="wind-${i}">
            <div class="small-game-window">
                <img src="${game.image}" alt="${game.name}" class="img-fluid">
                <h3>${game.name}</h3>
                <div class="rating">${game.rating}/10</div>
            </div>
        </div>
        `;
        i++;
    });
}
const searchButton = document.getElementById('searchButton');
const filterButton = document.getElementById('applyFilters');

function getSelectedValues(filterName) {
    return Array.from(document.querySelectorAll(`input[name="${filterName}"]:checked`))
        .map(input => input.value);
}

function filterGames() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    
    const genres = getSelectedValues('genre');
    const platforms = getSelectedValues('platform');
    const dates = getSelectedValues('release-date');
    const modes = getSelectedValues('game-mode');
    const prices = getSelectedValues('price-range');
    const filteredGames = games.filter(game => {
        const searchResult = game.name.toLowerCase().includes(searchValue);
        const genreResult = genres.length === 0 || genres.includes(game.genre);
        const platformResult = platforms.length === 0 || platforms.includes(game.platform);
        const datesResult = dates.length === 0 || date.includes(game.releaseDate);
        const modesResult = modes.length === 0 || modes.includes(game.gameMode);
        const pricesResult = prices.length === 0 || prices.includes(game.priceRange);

        return searchResult && genreResult && platformResult && datesResult && modesResult && pricesResult;
    });
    saveFilters();
    displayGames(filteredGames);
}

searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    filterGames(); 
});

filterButton.addEventListener('click', () => {
    filterGames(); 
});


window.addEventListener('load', () => {
    loadFilters();
});

const gameWindows = document.querySelectorAll(".game-w");
const expandableWindow = document.getElementById('show-exp')
gameWindows.forEach((event) => {
    event.addEventListener('click', (e) => {
        var id = e.currentTarget.id.split('-')[1];
        var game = games[id];
        document.querySelector('.game-title').textContent = game.name;
        document.querySelector('.img-src').src = game.image;
        document.querySelector('.rating-stars').textContent = `${game.rating}/10`;
        expandableWindow.classList.toggle("opened");
    });
});

function closeSlideUp()
{
    var expandable = document.querySelector('.game-show.expandable');
    expandable.classList.remove('opened');
    
}