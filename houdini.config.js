/** @type {import('houdini').ConfigFile} */
const config = {
	schemaPath: './schema/schema.graphql',
	sourceGlob: 'src/**/*.{svelte,gql,graphql}',
	apiUrl: 'http://localhost:8888/graphql',
	framework: 'kit',
	module: 'esm',
	scalars: {
		DateTime: {
			type: 'Date',
			marshal(val) {
				return val.getTime();
			},
			unmarshal(val) {
				return new Date(val);
			}
		}
	}
};

export default config;
