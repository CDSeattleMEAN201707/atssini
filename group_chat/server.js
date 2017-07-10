var express = require("express");
var app = express();

var server = app.listen(8000, function(){
  console.log("listening on 8000");
})
var io = require('socket.io').listen(server);


app.get('/', function(req, res){
  res.render('index', {title: "Survey Form"});
})

io.sockets.on('connect', function(socket){
  console.log("Socket is ready");
  console.log(socket.id);
  socket.on("chat", function(data){
    console.log('************** ')
    socket.broadcast.emit('display',data)
  })
})


app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');
