/**
 * This file will act as the route for the github_repo controller
 * 
 */

// define the routes - REST endpoints for github_repo

const github_repo_controller = require("../controllers/github_repos.controller");

module.exports = (app)=>{

    // GET - Endpoint for making the web call to fetch the repos and commits
    app.get("/", github_repo_controller.get_most_forked_repositories);

}