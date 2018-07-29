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



document.getElementById('search-btn').addEventListener("click", (e)=> {
    e.preventDefault();
    const list= document.querySelector("#repo-list");
    const searchKey= document.querySelector("#search-key");
    let output=``;
    list.innerHTML="";
    let text="https://api.github.com/search/repositories?q=user:HackYourFuture+"+searchKey.value;
    fetchJSONData(text, data => {
        const list= document.querySelector("#repo-list");
        const searchKey= document.querySelector("#search-key");
        const infoTable = document.createElement('table');
        infoTable.classList.add("repo-list");
        list.appendChild(infoTable);
        if(data.items==0){
            output = "<p class='warning'>No result found</p>"
        }else{
            for(const repo of data.items){
                output +=`
                <tr>
                <td>
                <a href="#" class='repo-link' onclick="showRepoItem('${repo.name}','${repo.owner.login}');"> ${repo.name || ""}</a>
                </td>
                <td>
                ${repo.description || "-------------"}
                </td>
                </tr>
                `;
            }
        }

        infoTable.innerHTML= output;
        document.querySelector(".loading").classList.remove("show");                
    });            
}); 
function showRepoItem(name,login){
    const url= 'https://api.github.com/repos/' + login + '/' + name + '/commits?access_token=192640a98a169c64a9bd45e293c2792375ca9860'
    fetchJSONData(url, data => {
        const item= document.querySelector("#repos-item");
        const title= document.querySelector("#repo-item-title");
        let output=``;
        title.innerHTML=`<p>${name}</p>`;
        for(const item of data){
            if(checkForNull(item)){
                output +=`
                <div class="repos-portfolio">
                <div class="repos-profile-img" id="img2">
                ${checkForNull(item.author)?
                    `<img src="${item.author.avatar_url}">`:
                    `No data`
                }
                </div>
                <div class="repos-profile-info">
                ${checkForNull(item.author)?
                    `<a href="${item.author.html_url}" class="profile-name" target="_blank">${item.author.login}</a>`:
                    `No data`
                }
                <p class="profile-date">${item.commit.author.date}</p>
                <p class="profile-message">${item.commit.message}</p>
                <a href="${item.html_url}" class="profile-url" target="_blank">View </a>
                </div>
                </div>
                `;
            }else{
                output +="No data found"
            }
        }
        item.innerHTML= output;
        document.querySelector(".loading").classList.remove("show");
    });
}

function checkForNull (value){
    if(value===null){
        return false;
    }else{
        return true;
    }
}
