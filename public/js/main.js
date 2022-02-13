const socket = io('/');

socket.on('connect', () => {
	console.log('Conectado correctamente al server');
	console.log(socket.id);
});
