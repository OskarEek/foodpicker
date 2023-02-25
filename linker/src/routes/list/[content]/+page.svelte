<script>
    import List from '$lib/list.svelte'
    export let data;
</script>

<h1>Display temp list</h1>
<List list={data.content}/>