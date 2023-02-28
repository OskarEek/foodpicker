<script>
    export let recipe = {}
</script>

<div>
    <h3>{recipe.name}</h3>
    <p>{recipe.description}</p>
    <ul>
        {#each recipe.products as product}
            <li>
                <p>{product.name + " " + product.amount + product.measurement}</p>
            </li>
        {/each}
    </ul>
</div>