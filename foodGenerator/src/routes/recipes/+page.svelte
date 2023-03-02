<script>
    import MiniRecipe from '$lib/MiniRecipe.svelte'
    import { recipes } from './recipesTestData'

    let storedRecipes = recipes;
    let numberInput;
    let generatedRecipes = []

    function generateRecipes() {
        if (numberInput > 10) return

        //Reset array
        generatedRecipes = [];

        //Add number of requested recipes to the "generatedRecipes" array
        for (let i = 0; i < numberInput; i++) {
            let randomIndex = Math.floor(Math.random() * (storedRecipes.length))
            let recipe = storedRecipes[randomIndex]
            
            //No need to try to get unique recipe if all possible recipes already in list
            if (generatedRecipes.length < storedRecipes.length) {
                //Get a new recipe until we get one thats not already in the list
                while (objectExistsInList(generatedRecipes, "id", recipe.id)) {
                    randomIndex = Math.floor(Math.random() * (storedRecipes.length))
                    recipe = storedRecipes[randomIndex]
                }
            }

            generatedRecipes = [recipe, ...generatedRecipes]
        }
    }

    function objectExistsInList(array, objectProperty, value){
        return !!array.filter(function(item){
            return item[objectProperty] == value;
        }).length;
    }

</script>

<div class="vstack gap-3">
    <h1>Alla recept</h1>
    {#each storedRecipes as recipe}
        <a class="bg-light border" href="/recipes/{recipe.id}">{recipe.name}</a>
    {/each}
</div>

<div>
    <h1>Generera recept</h1>
    <label>Antal maträtter som ska genereras:</label>
    <input type="text" bind:value={numberInput} />
    <button on:click={generateRecipes}>Generate</button>
    {#each generatedRecipes as recipe, i}
        <h2>Dag {i + 1}</h2>
        <MiniRecipe recipe={recipe} />
    {/each}
</div>