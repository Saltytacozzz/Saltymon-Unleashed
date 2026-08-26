ServerEvents.recipes(event => {

    // ==========================================
    // 1. CARD BINDER TIER PROGRESSION OVERHAUL
    // ==========================================
    // We remove the cheap, easy recipes for high-tier binders so players must climb the ladder.
    event.remove({ output: 'cobblemon_cards:master_binder' })
    event.remove({ output: 'cobblemon_cards:netherite_binder' })

    // NETHERITE BINDER: Requires Create processing with Diamond Binders and Netherite Scrap
    event.recipes.create.sequenced_assembly([
        'cobblemon_cards:netherite_binder'
    ], 'cobblemon_cards:diamond_binder', [
        event.recipes.create.pressing('kubejs:incomplete_netherite_binder', 'cobblemon_cards:diamond_binder'),
        event.recipes.create.deploying('kubejs:incomplete_netherite_binder', ['kubejs:incomplete_netherite_binder', 'minecraft:netherite_scrap']),
        event.recipes.create.deploying('kubejs:incomplete_netherite_binder', ['kubejs:incomplete_netherite_binder', 'minecraft:obsidian'])
    ]).transitionalItem('kubejs:incomplete_netherite_binder').loops(3)

    // MASTER BINDER (The Ultimate RPG Trinket): Requires Netherite Binder + Tinted Glass + Max Revive core
    event.recipes.create.sequenced_assembly([
        'cobblemon_cards:master_binder'
    ], 'cobblemon_cards:netherite_binder', [
        event.recipes.create.pressing('kubejs:incomplete_master_binder', 'cobblemon_cards:netherite_binder'),
        event.recipes.create.deploying('kubejs:incomplete_master_binder', ['kubejs:incomplete_master_binder', 'minecraft:tinted_glass']),
        event.recipes.create.deploying('kubejs:incomplete_master_binder', ['kubejs:incomplete_master_binder', 'cobblemon:max_revive']),
        event.recipes.create.pressing('kubejs:incomplete_master_binder', 'kubejs:incomplete_master_binder')
    ]).transitionalItem('kubejs:incomplete_master_binder').loops(5)


    // ==========================================
    // 2. WAYSTONES GATING (Exploration Over Teleport Spam)
    // ==========================================
    event.remove({ output: 'waystones:waystone' })

    event.recipes.create.mixing('waystones:waystone', [
        'minecraft:chiseled_stone_bricks',
        'minecraft:ender_pearl',
        'minecraft:nether_quartz',
        Item.of('minecraft:clock')
    ]).heated()


    // ==========================================
    // 3. FARMER'S DELIGHT + COBBLEMON PHARMACEUTICALS
    // ==========================================
    event.custom({
        type: "farmersdelight:cooking",
        ingredients: [
            { item: "cobblemon:revive" },
            { item: "minecraft:golden_carrot" },
            { item: "farmersdelight:melon_juice" },
            { item: "minecraft:honey_bottle" }
        ],
        result: { item: "cobblemon:max_revive" },
        experience: 3.0,
        cookingtime: 300
    })

    event.custom({
        type: "farmersdelight:cooking",
        ingredients: [
            { item: "cobblemon:super_potion" },
            { item: "farmersdelight:tomato" },
            { item: "farmersdelight:onion" }
        ],
        result: { item: "cobblemon:hyper_potion" },
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
        Item.of('cobblemon:poke_ball').withChance(100)
    ], 'cobblemon:red_apricorn')

}) // <-- This single closing bracket cleanly terminates the whole script!