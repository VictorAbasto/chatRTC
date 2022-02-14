import * as store from './store.js';
import * as wss from './wss.js';
import * as webRTCHandler from './webRTCHandler.js';
import * as constants from './constants.js';

//Inicializacion del socket.io y su conexión
const socket = io('/');

wss.registerSocketEvents(socket);

//Registrar evento de botón de copia.
const personalCodeCopyButton = document.getElementById('personal_code_copy_button');

personalCodeCopyButton.addEventListener('click', () => {
	const personalCode = store.getState().socketId;
	navigator.clipboard && navigator.clipboard.writeText(personalCode);
});

//Registrar evento de botones para conexiones.
const personalCodeChatButton = document.getElementById('personal_code_chat_button');

const personaCodeVideoButton = document.getElementById('personal_code_video_button');

personalCodeChatButton.addEventListener('click', () => {
	console.log('chat button clicked');
	const callePersonalCode = document.getElementById('personal_code_input').value;
	const callType = constants.callType.CHAT_PERSONAL_CODE;
	webRTCHandler.sendPreOffer(callType, callePersonalCode);
});

personaCodeVideoButton.addEventListener('click', () => {
	console.log('video button clicked');
	const callePersonalCode = document.getElementById('personal_code_input').value;
	const callType = constants.callType.VIDEO_PERSONAL_CODE;

	webRTCHandler.sendPreOffer(callType, callePersonalCode);
});
