<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ session, props }) => {
		if (session.user) {
			return {
				status: 302,
				redirect: '/'
			};
		}
		return {
			status: 200,
			props: {
				success: '',
				error: ''
			}
		};
	};
</script>

<script lang="ts">
	import { send } from '$lib/utils/api';

	export let error: string;
	export let success: string;

	import Page from '../../../components/Layout/Page.svelte';

	const login = async (event: SubmitEvent) => {
		error = '';
		success = '';

		const formEl = event.target as HTMLFormElement;

		const response = await send(formEl);

		console.log('Login/index: response', response);

		if (response.error) {
			error = response.error;
		}

		if (response.success) {
			success = response.success;
			if (response.data) {
				location.assign('/');
			}
		}

		formEl.reset();
	};
</script>

<Page>
	<form on:submit|preventDefault={login} method="post" autocomplete="off" class="login-form">
		<h2>Log in</h2>
		<label for="email">Email</label>
		<input type="text" name="email" required />
		<label for="password">Password</label>
		<input type="password" name="password" required />
		{#if error}
			<div class="error">{error}</div>
		{/if}

		<p>login: test@test.nl</p>

		{#if success}
			<p>You shouldn't see this message!!!</p>
		{/if}
		<button type="submit">Log in</button>
	</form>
</Page>
