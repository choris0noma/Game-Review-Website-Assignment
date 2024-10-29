const scroll1 = document.getElementById('popular-games');
const scroll2 = document.getElementById('recent-games');
const scroll3 = document.getElementById('trending');

function populateScroll(scroll)
{
    var i =0;
    games.forEach((game) => {
        scroll.innerHTML += `
             <div class="game-window" id="window-${i}">
                    <figure>
                        <img src="${game.image}" alt="${game.name}">
                        <figcaption>${game.name}</figcaption>
                    </figure>
                    <div class="rating">${game.rating}/10</div>
            </div>
        `;
        i++;
    });
}
populateScroll(scroll1);
populateScroll(scroll2);
populateScroll(scroll3);


let answers = document.querySelectorAll(".faq");
answers.forEach((event) => {
    event.addEventListener("click", () => {
        event.classList.toggle("active");
    });
});

let gameWindows = document.querySelectorAll(".game-window");
gameWindows.forEach((event) => {
    event.addEventListener("click", (e) => {
        var id = e.currentTarget.id.split('-')[1];
        localStorage.setItem('gameId', id);
        window.open('individual.html', '_blank');
    });
});

