const moviesUrl = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
document.querySelector(".loading").classList.add("show");

function getSearchMovies(movieList, keyWord) {
    return movieList.filter(name => {
        const words = name.title.toLowerCase().split(/[^\w]/);
        return keyWord.some(keyword => words.includes(keyword.toLowerCase()));
    });
}

function getMoviesWithTag(movieList, tag) {
    return movieList.filter(movie => {
        if (tag === "all") {
            return movie.tag;
        } else {
            return movie.tag === tag
        }

    })
}

function getMoviesWithDecade(movieList, decade) {
    return movieList.filter(movie => {   

        if (decade === "all") {
            return movie.year;
        } else {
            return movie.year >= decade && movie.year <= (Number(decade) +9);

        }
    })
}

function getRadioVal(form, name) {
    let val;
    let radios = form.elements[name];
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val;
}

function getSelectedDecadeValue(element) {
    return document.getElementById(element).value;
}

function secondsToHrs(sec) {
    let hrs = (sec / 3600).toFixed(0)
    let mins = ((sec % 3600) / 60).toFixed(0)
    return hrs + " hrs " + mins + " mins "
}

function addTagToMovie(movie) {
    if (movie.rating >= 7) {
        return movie.tag = 'Good';
    } else if (movie.rating >= 4) {
        return movie.tag = 'Average';
    } else {
        return movie.tag = 'Bad';
    }
}
fetch(moviesUrl)
    .then(movieData => movieData.json())
    .then(movieList => {

        movieList.forEach(addTagToMovie);
        let output = ``;
        document.querySelector(".loading").classList.remove("show");
        movieList.map((movie) => {
            output += `
                <div class="col-sm-4">
                    <div class="movie-list">
                        <h2 class="title">${movie.title}</h2>
                        <p class="year">(${movie.year}) <span>${secondsToHrs(movie.running_times) }</span></p>
                        <p class="ratings"><i class="fas fa-star"></i> <span>${movie.rating}</span></p>
                        <p class="votes"> <i class="fas fa-thumbs-up"></i> ${movie.votes}</p>
                        <div class="tag ${movie.tag.toLowerCase()}">${movie.tag}</div>
                    </div>
                </div>
            `
        });
        document.getElementById('movies-list').innerHTML = output;

        function submitForm() {
            let keyWords = document.querySelector("#search-word").value;
            keyWords === "" ? newKeyWords = [""] : newKeyWords = keyWords.split(/[^\w]/).filter(function(keyWord) { return keyWord != "" });
            document.getElementById('movies-list').innerHTML = "";
            const searchedMovieList = getSearchMovies(movieList, newKeyWords);
            let tag = getRadioVal(searchForm, "tag");
            let movieListWithTag = getMoviesWithTag(searchedMovieList, tag);
            let d = getSelectedDecadeValue("decadeValue");
            console.log("ddd", d)
            let movieListFinal = getMoviesWithDecade(movieListWithTag, d);
            console.log("movieListFinal", movieListFinal)
            output = ``;
            if (movieListFinal.length === 0) {
                output = `<div class="col-sm-12"><p class="alert alert-warning">No Result Found for "${keyWords}"</p></div>`
            } else {
                movieListFinal.map((movie) => {
                    output += `
                    <div class="col-sm-4">
                        <div class="movie-list">
                            <h2 class="title">${movie.title}</h2>
                            <p class="year">(${movie.year}) <span>${secondsToHrs(movie.running_times) }</span></p>
                            <p class="ratings"><i class="fas fa-star"></i> <span>${movie.rating}</span></p>
                            <p class="votes"> <i class="fas fa-thumbs-up"></i> ${movie.votes}</p>
                            <div class="tag ${movie.tag.toLowerCase()}">${movie.tag}</div>
                        </div>
                    </div>
                `
                });
            }
            document.getElementById('movies-list').innerHTML = output;
        }
        let searchForm = document.querySelector("#search-form");
        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            submitForm();
        });
        let selectElement = document.querySelector("#decadeValue");
        selectElement.addEventListener("click", (e) => {
            e.preventDefault();
            submitForm();
        });
        let radios = document.getElementsByClassName("tag-element");
        for (let i = 0; i < radios.length; i++) {
            radios[i].addEventListener("click", () => {
                submitForm();
            });
        }
    });