<script>
    export let list = [];
</script>

{#each list as item}
    <a href={item.url}>{item.name != null ? item.url : item.name}</a>
{/each}