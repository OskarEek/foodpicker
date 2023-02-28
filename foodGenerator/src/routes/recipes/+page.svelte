<script>
    import Recipe from '$lib/Recipe.svelte'

    
    let recipes = [
        {id: 1, name: "Körtfärsås", description: "Koka spaghetti, stek köttfärs", products: [
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
        }
    ]

</script>

{#each recipes as recipe}
	<Recipe recipe={recipe} />
{/each}