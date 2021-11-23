let message = document.getElementById('message');

const addMovie = (event) => {
    event.preventDefault();

    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    let deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);

    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);

    movie.appendChild(movieTitle);
    movie.appendChild(deleteBtn);
    document.querySelector('ul').appendChild(movie);

    inputField.value = '';
}

const deleteMovie = (event) => {
    event.target.parentNode.remove();
    message.textContent = 'Movie deleted!';
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched!';
    } else {
        message.textContent = 'Movie added back!';
    }
}

let formSubmit = document.querySelector('form');
formSubmit.addEventListener('submit', addMovie);
