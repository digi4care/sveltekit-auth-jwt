export type JwtPayload {
	[key: string]: any;
	id: number | undefined;
	iss?: string | undefined;
	sub?: string | undefined;
	aud?: string | string[] | undefined;
	exp?: number | undefined;
	nbf?: number | undefined;
	iat?: number | undefined;
	jti?: string | undefined;
}

export type Token {
	authToken: string;
	refreshToken: string;
	sessionToken?: string;
	clientMutationId?: string;
	jwtAuthExpiration: string;
	user: UserObject;
}

type Send = Promise<{
	error?: string;
	success?: string;
	data?: object;
}>;

import type { MutationResult } from '$houdini/runtime/lib/types';
import type { LoginUser$input, LoginUser$result } from '$houdini';

export type MutationLoginUserResults = MutationResult<LoginUser$result, LoginUser$input>;
export type MutationLoginUserDataLogin = MutationLoginUserResults['data'];
export type MutationLoginUserDataLoginUser = MutationLoginUserDataLogin['login']['user'];
export type MutationLoginUserDataLoginUserRoles = MutationLoginUserDataLoginUser['roles']['nodes'];
export type MutationLoginUserResultsPayload = {
	login: MutationLoginUserResults['data']['login'] | null;
	errors: ErrorObject | null;
};
export type ErrorObject = { errors: MutationLoginUserResults['errors'] };

export type UserObject = {
	user?: MutationLoginUserDataLoginUser;
};

export type CustomerObject = {
	customer?:
		| {
				jwtAuthToken: string;
				jwtAuthExpiration: string;
				jwtRefreshToken: string;
		  }
		| undefined;
};
export type MainNavigationLinks = {
	readonly getHeaderHCMS: {
		readonly nodes: {
			readonly id: string | null;
			readonly parentId: string | null;
			readonly label: string | null;
			readonly cssClasses: string[] | null;
			readonly description: string | null;
			readonly linkRelationship: string | null;
			readonly order: number | null;
			readonly path: string | null;
			readonly target: string | null;
			readonly title: string | null;
			readonly uri: string | null;
			readonly url: string | null;
		} | null;
	} | null;
};

export type MainNavigationLinksNested = {
	children: Array<MainNavigationLinksNested> | [];
	cssClasses: string[] | [];
	description: string | null;
	id: string | null;
	label: string | null;
	linkRelationship: string | null;
	order: number | null;
	parentId: string | null;
	path: string | null;
	target: string | null;
	title: string | null;
	uri: string | null;
	url: string | null;
};
