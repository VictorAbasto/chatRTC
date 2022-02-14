const express = require('express');
const res = require('express/lib/response');
const http = require('http');
const { disconnect } = require('process');
const { Socket } = require('socket.io');

const PORT = process.env.PORT || 3000;

const app = express();

const server = http.createServer(app);

const io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

let connectedUsers = [];

io.on('connection', (socket) => {
	connectedUsers.push(socket.id);
	console.log(connectedUsers);

	socket.on('pre-offer', (data) => {
		console.log('pre-offer came');
		console.log(data);
	});

	socket.on('disconnect', () => {
		console.log('user disconnected');

		const newConnectedPeers = connectedUsers.filter((peerSocketId) => {
			return peerSocketId !== socket.id;
		});
		connectedUsers = newConnectedPeers;
	});
});

server.listen(PORT, () => {
	console.log(`listenin on ${PORT}`);
});
