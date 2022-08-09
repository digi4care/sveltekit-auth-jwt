export class TextConversions {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	/**
	 * Get the basename from a filename.
	 * @date 2022-08-04
	 * @param {string} path
	 * @returns {string} Basename, so we can use this as a slug
	 */
	public static slugFromPath(path: string): string {
		return path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
	}

	/**
	 * Convert string to a slug
	 * @date 2022-08-04
	 * @param {string} value
	 * @returns {string}
	 */
	public static convertToSlug(value: string): string {
		return value
			.toLowerCase()
			.replace(/[^\w ]+/g, '')
			.replace(/ +/g, '-');
	}

	/**
	 * Convert a string to a sentence
	 * @date 2022-08-04
	 * @param {string} value
	 * @returns {string}
	 */
	public static convertToSentence(value: string): string {
		return `${value.charAt(0).toUpperCase()}${value
			.slice(1)
			.toLocaleLowerCase()
			.replace(/-/g, ' ')}`;
	}
}
