import type { RequestHandlerArgs } from '$houdini';
import { HoudiniClient } from '$houdini';

import config from '~/config';
import { Authentication } from '~/lib/class/Authentication';

// TODO fix this
// For Query & Mutation
async function fetchQuery({
	fetch,
	text = '',
	variables = {},
	session,
	metadata
}: RequestHandlerArgs) {
	const headers = Authentication.setHeaders(session);

	// console.log({ ...headers });

	// Prepare the request
	const url = config.launchURL;

	// regular fetch (Server & Client)
	const result = await fetch(url, {
		method: 'POST',
		headers: {
			...headers
		},
		body: JSON.stringify({
			query: text,
			variables
		})
	});

	// extract and assign the json body of the response to a variable
	const json = await result.json();

	// metadata usage example
	if (metadata?.logResult === true) {
		console.info(JSON.stringify(json, null, 2));
	}

	return json;
}

// Export the Houdini client
export default new HoudiniClient(fetchQuery);
