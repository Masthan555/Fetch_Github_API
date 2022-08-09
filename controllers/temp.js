const axios = require("axios");

async function get(){
    const reponse = await axios.get("https://api.github.com/repos/Masthan555/Node-DSA-Practice/commits");

    console.log(reponse);
}

get();