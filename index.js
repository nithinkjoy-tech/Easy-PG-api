const express = require("express");
if(process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}

const app = express();
require("./startup/db")();

require("./startup/cors")(app);
require("./startup/routes")(app);

const port = process.env.PORT || 3800;
app.listen(port, () => console.log(`Listening to port ${port}`));
