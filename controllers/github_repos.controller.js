/**
 * This controller is responsible doing the main task of fetching repos and commits from web
 */

const axios = require("axios");

/**
 * This method, gets the most forked repositories and their commits correspondingly in descending order
 */
exports.get_most_forked_repositories = async (req, res) => {
    
    try {
        let repo_url = "https://api.github.com/search/repositories?q=forks:>=1&sort=forks&order=desc&per_page=";

        const n = req.query.n;
        const m = req.query.m;
        
        // Deciding repositories per page, since github APIs return repositories with default pagination
        // For saving network bandwidth, here we are getting last page, and then retrieving all pages and combining the results
        let last_page = await get_repo_last_page_count(repo_url)+1;

        // Here calling "fill_data_from_github_api()" will fetch data for all pages and returns array
        let repositories = await fill_data_from_github_api(n, last_page, repo_url, 'R');
        
        // Now for each repository we need to get commits and group them by user and sort it descending based on commit count of each individual
        for(const repository of repositories){
            let commit_url = `https://api.github.com/repos/${repository.full_name}/commits?per_page=`;

            // getting last page of commit, since github gives max 100 records per request/page.
            let last_page = await get_commit_last_page_count(commit_url)+1;

            let commit_freq_obj = {};
            // getting commits from github api
            const commits = await fill_data_from_github_api(m, last_page, commit_url, 'C');;
            
            // Making frequency array for grouping commits based on github login profile
            for(const commit of commits){
                if(commit_freq_obj[commit.commit.committer.email]){
                    commit_freq_obj[commit.commit.committer.email][0]++;
                    commit_freq_obj[commit.commit.committer.email][1].push(commit);
                }else{
                    commit_freq_obj[commit.commit.committer.email] = [1, [commit]];
                }
            }

            // getting count into some sortable array and then sorting it to descending order
            let sortable = Object.values(commit_freq_obj);
            sortable.sort((a, b)=>{
                return b[0] - a[0];
            });
            
            // Finally copying the 'm' commits into corresponding repository
            repository.commits = [];
            for(let i=0; i<sortable.length; i++){
                repository.commits.push(...sortable[i][1]);
            }
        }

        // returning the repositories as reponse
        res.status(200).send(repositories);
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({
            message: "Some internal error: "+err.message
        })
    }

}

/**
 * This method will get last page for the repositories API, Since github return max 100 items per request
 */
let get_repo_last_page_count = async (repo_url)=>{
    const git_res = await axios.get(repo_url + "100");
    if(git_res.headers.link){
        return git_res.headers.link.split(',')[1].split("page=")[1].split('&')[0];
    }else{
        return 1;
    }
}

/**
 * This method will get last page for the commits API, Since github return max 100 items per request
 */
let get_commit_last_page_count = async (commit_url)=>{
    const git_res = await axios.get(commit_url + "100");
    if(git_res.headers.link){
        return git_res.headers.link.split(',')[1].split("page=")[1].split(">;")[0];
    }else{
        return 1;
    }
}

/**
 * This method will get data from github api's and works generic for both repo and commit API, which takes URL as parameter
 */
let fill_data_from_github_api = async (n, last_page, url, type)=>{
    let array = [];
    let current_page = 1;
    while(n != 0 && current_page != last_page){
        let git_res;
        if(n > 100){
            git_res = await axios.get(url +`100&page=${current_page}`);
            n = n - 100;
        }else{
            git_res = await axios.get(url +`${n}&page=${current_page}`);
            n = 0;
        }

        switch(type){
            case 'R': array.push(...(git_res.data.items));   
                      break;
            case 'C': array.push(...(git_res.data));   
                      break;
        }

        current_page++;
    }
    return array;
}