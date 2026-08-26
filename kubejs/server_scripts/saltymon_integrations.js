ServerEvents.recipes(event => {
    // ==========================================
    // 1. CREATE + COBBLEMON: EVOLUTION WASHING
    // ==========================================
    // Wash Magma Blocks for a rare chance at a Fire Stone
    event.recipes.create.splashing([
        Item.of('cobblemon:fire_stone').withChance(0.05),
        Item.of('minecraft:magma_cream').withChance(0.2)
    ], 'minecraft:magma_block')

    // Wash Prismarine for a rare chance at a Water Stone
    event.recipes.create.splashing([
        Item.of('cobblemon:water_stone').withChance(0.05),
        Item.of('minecraft:prismarine_crystals').withChance(0.2)
    ], 'minecraft:prismarine')

    // ==========================================
    // 2. FARMER'S DELIGHT + COBBLEMON: POKÉ FOODS
    // ==========================================
    // Brew a Max Revive using the Cooking Pot
    event.custom({
        type: "farmersdelight:cooking",
        ingredients: [
            { item: "cobblemon:revive" },
            { item: "minecraft:golden_apple" },
            { item: "farmersdelight:cabbage_leaf" },
            { item: "farmersdelight:tomato_sauce" }
        ],
        result: { item: "cobblemon:max_revive" },
        experience: 2.0,
        cookingtime: 250
    })

    // ==========================================
    // 3. CREATE: SEQUENCED ASSEMBLY FOR ULTRA BALLS
    // ==========================================
    // The Factory Must Grow: Automating Ultra Ball crafting
    event.recipes.create.sequenced_assembly([
        Item.of('cobblemon:ultra_ball').withChance(95.0),
        Item.of('cobblemon:iron_base').withChance(5.0) // Scrap if it fails
    ], 'cobblemon:iron_base', [
        event.recipes.create.deploying('kubejs:incomplete_ultra_ball', ['kubejs:incomplete_ultra_ball', 'cobblemon:yellow_apricorn']),
        event.recipes.create.deploying('kubejs:incomplete_ultra_ball', ['kubejs:incomplete_ultra_ball', 'cobblemon:black_apricorn']),
        event.recipes.create.pressing('kubejs:incomplete_ultra_ball', 'kubejs:incomplete_ultra_ball')
    ]).transitionalItem('kubejs:incomplete_ultra_ball').loops(1)
})