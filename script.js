const butterfly = document.getElementById('butterfly');
const gameContainer = document.getElementById('container');

function randomPosition() {
    const maxWidth = gameContainer.clientWidth - butterfly.clientWidth;
    const maxHeight = gameContainer.clientHeight - butterfly.clientHeight;
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;
    return { x: randomX, y: randomY };
}

function moveButterfly() {
    const position = randomPosition();
    butterfly.style.left = `${position.x}px`;
    butterfly.style.top = `${position.y}px`;
}

moveButterfly();


butterfly.addEventListener("mouseover", () => {
    moveButterfly();
});

// const butterfly = document.getElementById('butterfly');

// butterfly.addEventListener('click', () => {
//     changeButterflyPosition();
// });

// function changeButterflyPosition() {
//     const maxX = window.innerWidth - butterfly.clientWidth;
//     const maxY = window.innerHeight - butterfly.clientHeight;

//     const newX = Math.floor(Math.random() * maxX);
//     const newY = Math.floor(Math.random() * maxY);

//     butterfly.style.left = newX + 'px';
//     butterfly.style.top = newY + 'px';
// }


// changeButterflyPosition();