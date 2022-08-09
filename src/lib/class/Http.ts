import { goto } from '$app/navigation';

import { DateTime } from './DateTime';

export class Http {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	/**
	 * Redirect to specific path if the givin timestamp has expired
	 * @date 2022-08-06
	 * @param {number|undefined} timestamp
	 * @param {string} path
	 * @param {object} options
	 * @returns {void}
	 */
	public static expiredTimestampRedirect(
		timestamp: number | undefined,
		path: string,
		options: object = {}
	): void {
		if (!DateTime.isTimestampExpired(timestamp)) {
			goto(path, options);
		}
	}
}
