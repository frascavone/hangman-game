// HTTP request
import { showMessage } from "./view";

export const getWordFromAPI = async function () {
	try {
		const response = await fetch("https://random-word-api.herokuapp.com/word?lang=it");
		if (response.ok) {
			const words = await response.json();
			return words[0];
		} else {
			throw new Error(`Ops, qualcosa è andato storto`);
		}
	} catch (error) {
		showMessage(`${error.message}`);
	}
};
