ServerEvents.recipes(event => {

    const DIAMOND_BINDER = 'cobblemon-cards:diamond_binder'; 
    const NETHERITE_BINDER = 'cobblemon-cards:netherite_binder';
    const MASTER_BINDER = 'cobblemon-cards:master_album'; 

    // ==========================================
    // 1. CARD BINDER TIER PROGRESSION OVERHAUL
    // ==========================================
    event.remove({ output: MASTER_BINDER })
    event.remove({ output: NETHERITE_BINDER })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": DIAMOND_BINDER },
        "transitional_item": { "id": "kubejs:incomplete_netherite_binder" },
        "sequence": [
            {
                "type": "create:pressing",
                "ingredients": [ { "item": "kubejs:incomplete_netherite_binder" } ],
                "results": [ { "id": "kubejs:incomplete_netherite_binder", "count": 1 } ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_netherite_binder" },
                    { "item": "minecraft:netherite_scrap" }
                ],
                "results": [ { "id": "kubejs:incomplete_netherite_binder", "count": 1 } ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_netherite_binder" },
                    { "item": "minecraft:obsidian" }
                ],
                "results": [ { "id": "kubejs:incomplete_netherite_binder", "count": 1 } ]
            }
        ],
        "results": [ { "id": NETHERITE_BINDER, "count": 1 } ],
        "loops": 3
    });

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": NETHERITE_BINDER },
        "transitional_item": { "id": "kubejs:incomplete_master_binder" },
        "sequence": [
            {
                "type": "create:pressing",
                "ingredients": [ { "item": "kubejs:incomplete_master_binder" } ],
                "results": [ { "id": "kubejs:incomplete_master_binder", "count": 1 } ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_master_binder" },
                    { "item": "minecraft:tinted_glass" }
                ],
                "results": [ { "id": "kubejs:incomplete_master_binder", "count": 1 } ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_master_binder" },
                    { "item": "cobblemon:max_revive" }
                ],
                "results": [ { "id": "kubejs:incomplete_master_binder", "count": 1 } ]
            },
            {
                "type": "create:pressing",
                "ingredients": [ { "item": "kubejs:incomplete_master_binder" } ],
                "results": [ { "id": "kubejs:incomplete_master_binder", "count": 1 } ]
            }
        ],
        "results": [ { "id": MASTER_BINDER, "count": 1 } ],
        "loops": 5
    });

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
    });

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
    });

    // ==========================================
    // 4. RE-BALANCING BACKPACKS
    // ==========================================
    event.remove({ output: 'sophisticatedbackpacks:netherite_backpack' })
    
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "sophisticatedbackpacks:diamond_backpack" },
        "transitional_item": { "id": "kubejs:incomplete_netherite_tier" },
        "sequence": [
            {
                "type": "create:pressing",
                "ingredients": [ { "item": "kubejs:incomplete_netherite_tier" } ],
                "results": [ { "id": "kubejs:incomplete_netherite_tier", "count": 1 } ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_netherite_tier" },
                    { "item": "minecraft:netherite_scrap" }
                ],
                "results": [ { "id": "kubejs:incomplete_netherite_tier", "count": 1 } ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_netherite_tier" },
                    { "item": "cobblemon:max_revive" }
                ],
                "results": [ { "id": "kubejs:incomplete_netherite_tier", "count": 1 } ]
            }
        ],
        "results": [ { "id": "sophisticatedbackpacks:netherite_backpack", "count": 1 } ],
        "loops": 3
    });
})