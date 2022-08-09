export class DateTime {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	/**
	 * Determine whether string is timestamp
	 *
	 * @example
	 *
	 * isTimestamp('1606205966448'); // true
	 * isTimestamp(1606205966448); // true
	 * isTimestamp('1606205966448qwe'); // false
	 * isTimestamp('2020-11-24T08:19:26.448Z'); // false
	 *
	 * @param {string|number} n
	 * @returns {boolean}
	 */
	public static isTimestamp(n: string | number): boolean {
		const parsed = parseFloat(n);

		return !Number.isNaN(parsed) && Number.isFinite(parsed) && /^\d+\.?\d+$/.test(n);
	}

	/**
	 * Check if input is Numeric
	 * @param n number
	 * @returns boolean
	 */
	public static isNumeric(n: string | number): boolean {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	/**
	 * Is the timestamp expired
	 * @param {number} timestamp
	 * @returns {boolean} If the timestamp has expired it will return TRUE
	 */
	public static isTimestampExpired(timestamp: number | undefined): boolean {

        if(undefined === timestamp || null === timestamp) {
            return true;
        }

		const current_date: string = +new Date() as unknown as string;
		const current_date_to_int: number = parseInt(current_date);

		// correct the timestamp if needed
		if (10 === timestamp.toString().length) {
			timestamp = timestamp * 1000;
		}

		// Compare the timestamps
		if (current_date_to_int > timestamp) {
			return true; // timestamp is expired
		} else {
			return false;
		}
	}

	/**
	 * Get a date from the timestamp
	 * @param {number} timestamp
	 * @returns {Date} Date object
	 */
	public static getDateFromTimestamp(timestamp: number | undefined): Date {

        if(undefined === timestamp || null === timestamp) {
            return null;
        }

		// correct the timestamp if needed
		if (10 === timestamp.toString().length) {
			timestamp = timestamp * 1000;
		}

		return new Date(timestamp)
	}
}
