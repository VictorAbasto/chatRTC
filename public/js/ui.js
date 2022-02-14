export const updatePersonalCode = (personalCode) => {
	const personalCodeParagraph = document.getElementById('personal_code_value_paragraph');
	personalCodeParagraph.innerHTML = personalCode;
	console.log('enter and ', personalCode, ' and ', personalCodeParagraph);
};
