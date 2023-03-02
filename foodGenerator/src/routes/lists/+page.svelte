<script>
import { lists } from './listsTestData.js'
</script>

<h1>Mina listor:</h1>
<div class="vstack gap-3">
    {#each lists as list}
        <a class="bg-light border" href="/lists/{list.id}">{list.name}</a>
    {/each}
</div>