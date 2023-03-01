<script>
    export let recipe = {}
    let dropDownActive = false;

    function toggle() {
        dropDownActive = !dropDownActive;
    }
    $: defaultHidden = !dropDownActive ? "none" : "";
    $: defaultVisable = dropDownActive ? "none" : "";
</script>

<div class="bg-dark text-white rounded-end">
    <h3>{recipe.name}</h3>
    <button style="display: {defaultVisable}" on:click={toggle}>Öppna</button>
    <div style="display: {defaultHidden}">
        <p>{recipe.description}</p>
        <ul>
            {#each recipe.products as product}
                <li>
                    <p>{product.name + " " + product.amount + product.measurement}</p>
                </li>
            {/each}
        </ul>
        <button style="display: {defaultHidden}" on:click={toggle}>Stäng</button>
    </div>
</div>
