ServerEvents.recipes(event => {
    // ==========================================
    // 1. CREATE + COBBLEMON: EVOLUTION WASHING
    // ==========================================
    event.recipes.create.splashing([
        CreateItem.of('cobblemon:fire_stone', 0.05),
        CreateItem.of('minecraft:magma_cream', 0.20)
    ], 'minecraft:magma_block')

    event.recipes.create.splashing([
        CreateItem.of('cobblemon:water_stone', 0.05),
        CreateItem.of('minecraft:prismarine_crystals', 0.20)
    ], 'minecraft:prismarine')

    // ==========================================
    // 2. FARMER'S DELIGHT + COBBLEMON: POKE FOODS
    // ==========================================
    event.custom({
        type: "farmersdelight:cooking",
        recipe_book_tab: "meals", 
        ingredients: [
            { item: "cobblemon:revive" },
            { item: "minecraft:golden_apple" },
            { item: "farmersdelight:cabbage_leaf" },
            { item: "farmersdelight:tomato_sauce" }
        ],
        result: { id: "cobblemon:max_revive", count: 1 }, 
        experience: 2.0,
        cookingtime: 250
    })
})