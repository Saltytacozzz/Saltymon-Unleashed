ServerEvents.recipes(event => {
    // ==========================================
    // 1. CREATE + COBBLEMON: EVOLUTION WASHING
    // ==========================================
    event.recipes.create.splashing([
        CreateItem.of('cobblemon:fire_stone', 0.05),
        CreateItem.of('minecraft:magma_cream', 0.2)
    ], 'minecraft:magma_block')

    event.recipes.create.splashing([
        CreateItem.of('cobblemon:water_stone', 0.05),
        CreateItem.of('minecraft:prismarine_crystals', 0.2)
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

    // ==========================================
    // 3. CREATE: SEQUENCED ASSEMBLY FOR ULTRA BALLS
    // ==========================================
    event.recipes.create.sequenced_assembly([
        CreateItem.of('cobblemon:ultra_ball', 0.95),
        CreateItem.of('cobblemore_lib:poke_ball_base', 0.05) 
    ], 'cobblemore_lib:poke_ball_base', [ 
        event.recipes.create.deploying('kubejs:incomplete_ultra_ball', ['kubejs:incomplete_ultra_ball', 'cobblemon:yellow_apricorn']),
        event.recipes.create.deploying('kubejs:incomplete_ultra_ball', ['kubejs:incomplete_ultra_ball', 'cobblemon:black_apricorn']),
        event.recipes.create.pressing('kubejs:incomplete_ultra_ball', 'kubejs:incomplete_ultra_ball')
    ]).transitionalItem('kubejs:incomplete_ultra_ball').loops(1)
})