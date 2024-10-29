const id = localStorage.getItem('gameId');

const game = games[id];

if (game) {
    document.querySelector('.game-title').textContent = game.name;
    document.querySelector('.img-src').src = game.image;
    document.querySelector('.rating-stars').textContent = `${game.rating}/10`;
} else {
    document.body.innerHTML = "<h1>Game not found</h1>";
}