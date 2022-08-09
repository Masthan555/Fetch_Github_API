/**
 * This file will act as the route for the github_repo controller
 * 
 */

// define the routes - REST endpoints for github_repo

const github_repo_controller = require("../controllers/github_repos.controller");
const { validate_github_repo } = require("../middlewares");

module.exports = (app)=>{

    // GET - Endpoint for making the web call to fetch the repos and commits
    app.get("/", [validate_github_repo.validate_repo_fetch_request],  github_repo_controller.get_most_forked_repositories);

}