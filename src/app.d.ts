/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />
/**
 * With these declarations images can be imported in the components.
 *
 * @example
 * ```svelte
 * 	<script lang=ts>
 * 		import logo from 'static/images/logo.svg';
 * 	</script>
 *
 * 	<img src="{logo}" />
 * ```
 */

declare module '*.gif' {
	const value: string;
	export = value;
}

declare module '*.jpg' {
	const value: string;
	export = value;
}

declare module '*.jpeg' {
	const value: string;
	export = value;
}

declare module '*.png' {
	const value: string;
	export = value;
}

declare module '*.JPG' {
	const value: string;
	export = value;
}

declare module '*.JPEG' {
	const value: string;
	export = value;
}

declare module '*.PNG' {
	const value: string;
	export = value;
}

declare module '*.svg' {
	const value: string;
	export = value;
}

declare module '*.wbep' {
	const value: string;
	export = value;
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		user?: { id: number; email: string };
	}
	// interface Platform {}
	interface Session {
		user?: { id: number; email: string };
	}
	// interface Stuff {}

	interface Metadata {
		logResult?: boolean | null;
	}
}

interface ImportMetaEnv {
	SKAJWT_NODE_ENV: string;
	SKAJWT_DEBUG_MODE: string;
	SKAJWT_NAME: string;
	SKAJWT_DESCRIPTION: string;
	SKAJWT_AUTHOR: string;
	SKAJWT_EMAIL: string;
	SKAJWT_WEBSITE: string;
	SKAJWT_JWT_SECRET: string;
	SKAJWT_JWT_ISSUER: string;
	SKAJWT_COOKIE_REFRESH_MAXAGE: number;
	SKAJWT_COOKIE_ACCESS_MAXAGE: number;
	SKAJWT_GRAPHQL_ENDPOINT: string;
	SKAJWT_GRAPHQL_JWT_SECRET: string;
}
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
