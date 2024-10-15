const scroll1 = document.getElementById('popular-games');
const scroll2 = document.getElementById('recent-games');
const scroll3 = document.getElementById('trending');

function populateScroll(scroll)
{
    games.forEach((game) => {
        scroll.innerHTML += `
             <div class="game-window">
                    <figure>
                        <img src="${game.image}" alt="${game.name}">
                        <figcaption>${game.name}</figcaption>
                    </figure>
                    <div class="rating">${game.rating}/10</div>
            </div>
        `;
    });
}
populateScroll(scroll1);
populateScroll(scroll2);
populateScroll(scroll3);