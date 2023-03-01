<script>
    import MiniRecipe from '$lib/MiniRecipe.svelte'

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
    
    let storedRecipes = [
        {id: 1, name: "Körtfärsås och spaghetti", description: "Koka spaghetti, stek köttfärs", products: [
            {name: "köttfärs", amount: 500, measurement: "grams"},
            {name: "spaghetti", amount: 500, measuremnt: "grams"},
            {name: "tomatsås", amount: 100, measurement: "millilitres"},
            {name: "lök", amount: 1, measurement: "st"}
            ],
            numberOfPeople: 4
        },
        {id: 2, name: "Pasta Carbonara", description: "Koka spaghetti, stek bacon, hacka lök", products: [
            {name: "Bacon", amount: 200, measurement: "grams"},
            {name: "spaghetti", amount: 600, measurement: "grams"},
            {name: "lök", amount: 1, measurement: "st"},
            {name: "permesan-ost", amount: 60, measurement: "grams"}
            ],
            numberOfPeople: 3
        },
        {id: 3, name: "Kycklingrullar", description: "Koka spaghetti, stek bacon, hacka lök", products: [
            {name: "Bacon", amount: 200, measurement: "grams"},
            {name: "spaghetti", amount: 600, measurement: "grams"},
            {name: "lök", amount: 1, measurement: "st"},
            {name: "permesan-ost", amount: 60, measurement: "grams"}
            ],
            numberOfPeople: 3
        },
        {id: 4, name: "Tacos", description: "Koka spaghetti, stek bacon, hacka lök", products: [
            {name: "Bacon", amount: 200, measurement: "grams"},
            {name: "spaghetti", amount: 600, measurement: "grams"},
            {name: "lök", amount: 1, measurement: "st"},
            {name: "permesan-ost", amount: 60, measurement: "grams"}
            ],
            numberOfPeople: 3
        },
        {id: 5, name: "Falukorv och Makaroner", description: "Koka spaghetti, stek bacon, hacka lök", products: [
            {name: "Bacon", amount: 200, measurement: "grams"},
            {name: "spaghetti", amount: 600, measurement: "grams"},
            {name: "lök", amount: 1, measurement: "st"},
            {name: "permesan-ost", amount: 60, measurement: "grams"}
            ],
            numberOfPeople: 3
        }
    ]

</script>

<label>Antal maträtter som ska genereras:</label>
<input type="text" bind:value={numberInput} />
<button on:click={generateRecipes}>Generate</button>
{#each generatedRecipes as recipe, i}
    <h2>Dag {i + 1}</h2>
	<MiniRecipe recipe={recipe} />
{/each}