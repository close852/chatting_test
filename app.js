let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let socket = require('./socket')(io);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


http.listen(8888, () => {
    console.log(' server start ! http://localhost:8888')
});