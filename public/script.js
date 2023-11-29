async function searchMovies(){
    const searchInput = document.getElementById("searchInput").value;
    const movieList = document.getElementById("movieList");

    try{
        const apiKey = '';
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`);
        const data = await response.json();

        displayMovies(data.Search);
    }
    catch(error) {
        console.error("Error fetching movie data:", error);
        movieList.innerHTML = "Error fetching movie data. Please try again. ";
    }
}

function displayMovies(movies) {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";

    if(movies) {
        movies.forEach((movie) => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie");
            movieElement.innerHTML = `
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <p>${movie.Type}</p>
        `;

        movieList.appendChild(movieElement);
            
        });
    }
    else{
        movieList.innerHTML = "No movies found.";
    }
}