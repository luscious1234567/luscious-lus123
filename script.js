```javascript
/* =========================
   MOVIE DATA
========================= */

const movies = [

    {
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi",
        rating: "8.7"
    },

    {
        title: "Inception",
        year: 2010,
        genre: "Action",
        rating: "8.8"
    },

    {
        title: "The Dark Knight",
        year: 2008,
        genre: "Drama",
        rating: "9.0"
    },

    {
        title: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        genre: "Animation",
        rating: "8.4"
    },

    {
        title: "The Grand Budapest Hotel",
        year: 2014,
        genre: "Comedy",
        rating: "8.1"
    },

    {
        title: "Dune",
        year: 2021,
        genre: "Sci-Fi",
        rating: "8.0"
    },

    {
        title: "Gladiator",
        year: 2000,
        genre: "Action",
        rating: "8.5"
    },

    {
        title: "Whiplash",
        year: 2014,
        genre: "Drama",
        rating: "8.5"
    },

    {
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
        rating: "8.7"
    },

    {
        title: "Avengers: Endgame",
        year: 2019,
        genre: "Action",
        rating: "8.4"
    },

    {
        title: "Toy Story",
        year: 1995,
        genre: "Animation",
        rating: "8.3"
    },

    {
        title: "The Hangover",
        year: 2009,
        genre: "Comedy",
        rating: "7.7"
    }

];


/* =========================
   ELEMENTS
========================= */

const grid = document.getElementById("grid");

const search = document.getElementById("search");

const genre = document.getElementById("genre");


/* =========================
   RENDER MOVIES
========================= */

function renderMovies() {

    const searchText =
        search.value.toLowerCase().trim();

    const selectedGenre =
        genre.value;


    const filteredMovies = movies.filter(movie => {

        const matchesSearch =
            movie.title
                .toLowerCase()
                .includes(searchText) ||

            movie.genre
                .toLowerCase()
                .includes(searchText);


        const matchesGenre =
            selectedGenre === "all" ||
            movie.genre === selectedGenre;


        return matchesSearch && matchesGenre;

    });


    /* No results */

    if (filteredMovies.length === 0) {

        grid.innerHTML = `
            <div class="empty">
                🎬 No movies found.
            </div>
        `;

        return;
    }


    /* Create movie cards */

    grid.innerHTML = filteredMovies.map(movie => {

        return `

            <article class="movie-card">

                <div class="poster">

                    <div class="poster-title">
                        ${movie.title}
                    </div>

                </div>


                <div class="movie-info">

                    <h3>
                        ${movie.title}
                    </h3>

                    <div class="movie-meta">

                        ${movie.year}

                        ·

                        <span class="movie-genre">
                            ${movie.genre}
                        </span>

                        ·

                        <span class="rating">
                            ⭐ ${movie.rating}
                        </span>

                    </div>

                </div>

            </article>

        `;

    }).join("");

}


/* =========================
   SEARCH EVENT
========================= */

search.addEventListener(
    "input",
    renderMovies
);


/* =========================
   GENRE EVENT
========================= */

genre.addEventListener(
    "change",
    renderMovies
);


/* =========================
   INITIAL LOAD
========================= */

renderMovies();
```

