/**
 * This file will contain the custom middleware for 
 * validating the request query
 */

validate_repo_fetch_request = async (req,res, next) =>{
    if(!req.query.n || !req.query.m){
        return res.status(400).send("Please pass n and m query parameters");
    }

    next();
}

module.exports = {
    validate_repo_fetch_request : validate_repo_fetch_request
}