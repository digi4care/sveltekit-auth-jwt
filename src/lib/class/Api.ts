import type { MutationLoginUserResults, Send } from '~/models/types';

export class Api {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	/**
	 * Send formdata to the POST endpoint
	 * @date 2022-08-05
	 * @param {HTMLFormElement} form
	 * @returns {object}
	 */
	public static async sendFormData(form: HTMLFormElement): Promise<MutationLoginUserResults> {
		const response = await fetch(form.action, {
			method: form.method,
			body: new FormData(form),
			headers: { accept: 'application/json' }
		});
		return await response.json();
	}

	/**
	 * Send formdata to the POST endpoint - v2
	 * @date 2022-08-09
	 * @param {HTMLFormElement} form
	 * @returns {any} Send
	 */
	public static send = async (form: HTMLFormElement): Send => {
		const response = await fetch(form.action, {
			method: form.method,
			body: new FormData(form),
			headers: { accept: 'application/json' }
		});

		return await response.json();
	};

	/**
	 * Send JSON to the POST endpoint
	 * @date 2022-08-09
	 * @param {HTMLFormElement} form
	 * @returns {any} Send
	 */
	public static sendJson = async (form: HTMLFormElement): Send => {
		const response = await fetch(form.action, {
			method: form.method,
			body: JSON.stringify(form),
			headers: { accept: 'application/json' }
		});

		return await response.json();
	};
}
