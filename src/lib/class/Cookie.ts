export class Cookie {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	/**
	 *
	 * @param cookie
	 * @returns
	 */
	public static getCookieValue(cookie: string) {
		return cookie.split(';')[0].trim();
	}

	/**
	 *
	 * @param cookie
	 * @returns
	 */
	public static getCookieMaxage(cookie: string) {
		return cookie.split(';')[1].trim().replace('Max-Age=', '');
	}
}
