const express = require("express");
const bodyParser = require("body-parser");
const serverConfig = require("./configs/server.config");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialise routes
require("./routes")(app);

/**
 * Start the express server
 */
app.listen(serverConfig.PORT, () => {
    console.log("Application has started on the port ", serverConfig.PORT);
})