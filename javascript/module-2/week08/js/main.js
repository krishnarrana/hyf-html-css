const url = 'https://api.github.com/orgs/HackYourFuture/repos';
// Create new ajax call with the js function called XMLHttpRequest
const req = new XMLHttpRequest();
req.addEventListener('load', function (data) {
    // This in here is our callback function
    // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
    if (this.status === 200) {
        const responseText = req.responseText;
        const repoList = JSON.parse(responseText);
        console.log(repoList);
        let usedModules= ["HTML-CSS","Node.js","databases","JavaScript1","Git","CommandLine","React"];
		let output="";
		repoList.forEach(function(item){
			for(let i=0; i<usedModules.length; i++){
				if(usedModules[i]===item.name){
					output += `
					<li class="list-item">
					<div class="list-name">
					${item.name || "No Data"}
					</div>
					<div class="list-table">
					<table >
					<tr>
					<td>stargazers count :</td>
					<td>${item.stargazers_count || "No Data"}</td>
					</tr>
					<tr>
					<td>watchers :</td>
					<td>${item.watchers || "No Data"}</td>
					</tr>
					<tr>
					<td>forks :</td>
					<td>${item.forks || "No Data"}</td>
					</tr>
					<tr>
					<td>language :</td>
					<td>${item.language || "----"}</td>
					</tr>
					</table>
					</div>
					</li>
					`
				}
			}
		});
		
		document.getElementById("showData").addEventListener("click",function(){
			document.getElementById("list").innerHTML= output;
		})
    } else {
        console.log('Something is probably wrong with the url');
    }
});

req.addEventListener('error', function () {
    console.log('Server error like timeout');
});

// initializes a request with an http method
req.open("GET", url);
// Sends the request 
req.send();