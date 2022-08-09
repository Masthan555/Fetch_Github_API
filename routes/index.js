
const repo_routes = require('./github_repos.routes')

module.exports = (app)=>{
    repo_routes(app);
}