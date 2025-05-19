let express = require('express');

/** appsetup  */

let app = express();

/**---------------------set up server */
let server = app.listen(3000, () => {
    console.log("This app is running at localhost:3000");
});


/** route setup */
app.get('/', (res, req) => {
    req.sendFile(__dirname+ "/public/index.html");
});