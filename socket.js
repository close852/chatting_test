module.exports = (io) => {
    io.on('connection', socket => {
        console.log('a user connected@@@');
        socket.on('disconnect', () => {
            console.log('user disconnected')
        })
        socket.on('client msg', (data) => {
            // console.log(data);
            if (!data.msg) {
                return;
            }
            //boradcast!
            let first = '';

            let d = new Date();
            let month = (d.getMonth() + 1);
            let date = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
            let hour = d.getHours() % 12;
            let min = d.getMinutes();
            let ampm = d.getHours() >= 12 ? '오후' : '오전';
            let _data = {
                time: `${ampm} ${hour}:${min}`, //${month}-${date} 
                msg: data.msg,
                nick: data.nick,
                userid: data.userid
            }
            console.log(_data)
            io.emit('svrTomsg', _data);
        })
    })
}