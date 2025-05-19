let express = require('express');
let socket = require("socket.io");
/** appsetup */

let app = express();

/**---------------------set up server */
let server = app.listen(3000, () => {
console.log("This app is running at localhost:3000");
});


/** route setup */
app.get('/', (res, req) => {
req.sendFile(__dirname+ "/public/index.html");
});

/** ---socket.io setup */
let io = socket(server);
//Is connection is success?
io.on('connection', (socket) => {
//form index.html emit name is chat and callback function parameter is data \
//data is from chat at index.html
socket.on("chat", (data) => {
    io.sockets.emit('chat', data);
})
console.log('socket connection is connected');
})
