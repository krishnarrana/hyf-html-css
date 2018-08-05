const moviesUrl ="https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
const redditUrl ="https://www.reddit.com/r/ProgrammerHumor.json";

const waitThreeSecPromise = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve();

	},3000);
});


waitThreeSecPromise
	.then(()=>{
		const getMoviesPromise= fetch(moviesUrl);
		getMoviesPromise
			.then((data)=>{
				data.json()
					.then((movieList)=>{
						console.log(movieList);
						const getRedditPromise =fetch(redditUrl);

						getRedditPromise.then((redditData)=>{
							redditData.json()
								.then((redditList)=>{
									console.log(redditList.data.children);
								});
						});
					})
					
			});
			

	});






	