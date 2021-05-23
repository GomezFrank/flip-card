const card = document.querySelector('.card__inner');

function AddFlipClass() {
    card.classList.toggle('is-flipped')
}

card.addEventListener('click', AddFlipClass)