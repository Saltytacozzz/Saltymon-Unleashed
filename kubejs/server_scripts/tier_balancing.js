ServerEvents.recipes(event => {

    const DIAMOND_BINDER = 'cobblemon-cards:diamond_binder'; 
    const NETHERITE_BINDER = 'cobblemon-cards:netherite_binder';
    const MASTER_BINDER = 'cobblemon-cards:master_album'; 

    // ==========================================
    // 1. CARD BINDER TIER PROGRESSION OVERHAUL
    // ==========================================
    event.remove({ output: MASTER_BINDER })
    event.remove({ output: NETHERITE_BINDER })

    event.recipes.create.sequenced_assembly([
        NETHERITE_BINDER
    ], DIAMOND_BINDER, [
        event.recipes.create.pressing('kubejs:incomplete_netherite_binder', DIAMOND_BINDER),
        event.recipes.create.deploying('kubejs:incomplete_netherite_binder', ['kubejs:incomplete_netherite_binder', 'minecraft:netherite_scrap']),
        event.recipes.create.deploying('kubejs:incomplete_netherite_binder', ['kubejs:incomplete_netherite_binder', 'minecraft:obsidian'])
    ]).transitionalItem('kubejs:incomplete_netherite_binder').loops(3)

    event.recipes.create.sequenced_assembly([
        MASTER_BINDER
    ], NETHERITE_BINDER, [
        event.recipes.create.pressing('kubejs:incomplete_master_binder', NETHERITE_BINDER),
        event.recipes.create.deploying('kubejs:incomplete_master_binder', ['kubejs:incomplete_master_binder', 'minecraft:tinted_glass']),
        event.recipes.create.deploying('kubejs:incomplete_master_binder', ['kubejs:incomplete_master_binder', 'cobblemon:max_revive']),
        event.recipes.create.pressing('kubejs:incomplete_master_binder', 'kubejs:incomplete_master_binder')
    ]).transitionalItem('kubejs:incomplete_master_binder').loops(5)

    // ==========================================
    // 2. WAYSTONES GATING
    // ==========================================
    event.remove({ output: 'waystones:waystone' })

    event.recipes.create.mixing('waystones:waystone', [
        'minecraft:chiseled_stone_bricks',
        'minecraft:ender_pearl',
        'minecraft:quartz', 
        'minecraft:clock'
    ]).heated()

    // ==========================================
    // 3. FARMER'S DELIGHT + COBBLEMON PHARMACEUTICALS
    // ==========================================
    event.custom({
        type: "farmersdelight:cooking",
        recipe_book_tab: "meals",
        ingredients: [
            { item: "cobblemon:revive" },
            { item: "minecraft:golden_carrot" },
            { item: "farmersdelight:melon_juice" },
            { item: "minecraft:honey_bottle" }
        ],
        result: { id: "cobblemon:max_revive", count: 1 },
        experience: 3.0,
        cookingtime: 300
    })

    event.custom({
        type: "farmersdelight:cooking",
        recipe_book_tab: "meals",
        ingredients: [
            { item: "cobblemon:super_potion" },
            { item: "farmersdelight:tomato" },
            { item: "farmersdelight:onion" }
        ],
        result: { id: "cobblemon:hyper_potion", count: 1 },
        experience: 1.5,
        cookingtime: 200
    })

    // ==========================================
    // 4. RE-BALANCING BACKPACKS
    // ==========================================
    event.remove({ output: 'sophisticatedbackpacks:netherite_backpack' })
    
    event.recipes.create.sequenced_assembly([
        'sophisticatedbackpacks:netherite_backpack'
    ], 'sophisticatedbackpacks:diamond_backpack', [
        event.recipes.create.pressing('kubejs:incomplete_netherite_tier', 'sophisticatedbackpacks:diamond_backpack'),
        event.recipes.create.deploying('kubejs:incomplete_netherite_tier', ['kubejs:incomplete_netherite_tier', 'minecraft:netherite_scrap']),
        event.recipes.create.deploying('kubejs:incomplete_netherite_tier', ['kubejs:incomplete_netherite_tier', 'cobblemon:max_revive'])
    ]).transitionalItem('kubejs:incomplete_netherite_tier').loops(3)

    // ==========================================
    // 5. FIXING CHEAP APRICORN / POKÉ BALL RECIPES
    // ==========================================
    event.remove({ output: 'cobblemon:poke_ball' })
    
    event.recipes.create.cutting([
        'cobblemon:poke_ball'
    ], 'cobblemon:red_apricorn')
})