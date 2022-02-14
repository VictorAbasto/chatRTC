import * as wss from './wss.js';
export const sendPreOffer = (callType, callePersonalCalled) => {
	const data = { callType, callePersonalCalled };
	wss.sendPreOffer(data);
};
