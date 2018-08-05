function fetchJSONData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const req = new XMLHttpRequest();

    req.addEventListener('load', function(data) {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        if (this.status === 200) {
            const responseText = req.responseText;
            const data = JSON.parse(responseText)
            callback(data);
        } else {
            console.error('Something is probably wrong with the url');
        }
    });

    req.addEventListener('error', function() {
        console.error('Server error like timeout');
    });

    // initializes a request with an http method
    req.open("GET", url);
    // Sends the request
    document.querySelector(".loading").classList.add("show");
    req.send();
}
const url ="https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
fetchJSONData(url, moviesData=> {
    console.log(moviesData);
     let goodMoviesNumber=0, averageMoviesNumber=0, badMoviesNumber=0;
    
    moviesData.map( movie =>{
        if (movie.rating >=7){
            goodMoviesNumber ++;
           return movie.tag = 'Good';
         }
        else if(movie.rating >= 4 && movie.rating < 7){
            averageMoviesNumber ++;
            return movie.tag ='Average';
        }
        else{
            badMoviesNumber ++;
           return  movie.tag = 'Bad';
        }
    });
    
    let averageRatings= moviesData.reduce((accumulator,movie)=>{
        return accumulator + movie.rating
    },0) / moviesData.length;

    const keyWords =["The", "dog", "who", "is", "not", "a", "man"];
    let totalCount= 0;
    moviesData.map( movie=>{
        // keyWords.map(keyWord =>{
        //     if(search(keyWord, movie.title)){
        //         totalCount ++;

        //     }
        // })
        for(let i=0;i<keyWords.length;i++){
            if(search(keyWords[i], movie.title)){
                totalCount ++;
                break;
            }
        }
    });

    function search (word, str){
      let arrAtr= str.toLowerCase().split(" ");
      if(arrAtr.indexOf(word.toLowerCase()) != -1){
        return true;
      }else{
        return false;
      }
    }

    const eightiesMovies = moviesData
                                .filter(movie=> movie.year >=1980 && movie.year <= 1989);

    document.getElementById("homework2_2").innerHTML =` <p> The average rating of all the movies is <span> ${averageRatings}</span></p>`;
    document.getElementById("homework2_3").innerHTML =` <p> Good Movies = <span> ${goodMoviesNumber} </span></p>
                                                        <p> Average Movies =  <span> ${averageMoviesNumber}</span></p>
                                                        <p> Bad Movies =<span> ${badMoviesNumber} </span></p>

                                                        `;
    document.getElementById("homework2_4").innerHTML =` <p> The number of movies containing the keywords is <span>  ${totalCount} </span></p>`;
    document.getElementById("homework2_5").innerHTML =` <p> The  number of movies made between 1980-1989 is  <span> ${eightiesMovies.length}</span></p>`;
    document.querySelector(".loading").classList.remove("show");
});