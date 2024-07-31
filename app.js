// Function to add a movie
function addMovie() {
    // Get the movie title and date input values
    const title = document.getElementById('movie-title').value;
    const date = document.getElementById('movie-date').value;

    // Check if both inputs are filled
    if (title && date) {
        // Create a new div to hold the movie details
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie-item');

        // Create elements to display the movie title and date
        const movieTitle = document.createElement('p');
        movieTitle.textContent = `Title: ${title}`;
        const movieDate = document.createElement('p');
        movieDate.textContent = `Date: ${date}`;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('sui');
        deleteButton.textContent = '';
        deleteButton.onclick = function() {
            movieDiv.remove();
        };
        

        // Append the title, date, and delete button to the movie div
        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieDate);
        movieDiv.appendChild(deleteButton);

        // Append the movie div to the movie list
        document.getElementById('movie-list').appendChild(movieDiv);

        // Clear the input fields
        document.getElementById('movie-title').value = '';
        document.getElementById('movie-date').value = '';
    } else {
        alert('Please fill out both the movie title and date.');
    }
}
