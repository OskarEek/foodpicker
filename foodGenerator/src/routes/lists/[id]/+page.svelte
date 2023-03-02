<script>
    import MiniRecipe from '$lib/MiniRecipe.svelte'
	export let data;
    let list = data.list;
</script>

<h1>{list.name}</h1>
{#each list.recipes as recipe, i}
    <h3>Dag {i + 1}</h3>
	<MiniRecipe recipe={recipe} />
{/each}