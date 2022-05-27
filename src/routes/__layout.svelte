<script lang="ts">
	import '../app.css';
	import Navigation from '$components/navigation.svelte';
	import { db } from '$lib/db';
</script>

<div class="flex flex-row border min-h-screen gap-2">
	<Navigation />

	<div class="flex-1">
		<button class="btn btn-secondary" on:click={() => {}}>Test</button>
		<slot />
	</div>
</div>
