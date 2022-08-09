import { DateTime } from './DateTime';

export class Authentication {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	/**
	 * Set the correct header
	 * @date 2022-08-05
	 * @param {object} session
	 * @returns {object}
	 */
	public static setHeaders(session: object): object {
		const headers = {} as HeadersInit;

		if (session) {
			const authToken: string | undefined = session?.login?.authToken;
			const jwtAuthExpiration: number = session.login?.user?.jwtAuthExpiration;
			const isTokenExpired: boolean = DateTime.isTimestampExpired(jwtAuthExpiration);
			// console.log(new Date(jwtAuthExpiration*1000),'isTokenExpired');

			headers['Content-Type'] = 'application/json';
			if (undefined !== authToken && false === isTokenExpired) {
				headers['Authorization'] = `Bearer ${authToken}`;
			}
		}

		return headers;
	}
}
