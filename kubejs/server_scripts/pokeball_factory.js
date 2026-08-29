ServerEvents.recipes(event => {
    // 1. PURGE ALL OLD CCI RECIPES
    event.remove({ mod: 'createcobblemonintegrations' });

    // 2. THE BASE FORGING 
    event.recipes.create.compacting('6x createcobblemonintegrations:basic_bottom_blank', '4x minecraft:iron_nugget');
    event.recipes.create.pressing('createcobblemonintegrations:pokeball_bottom', 'createcobblemonintegrations:basic_bottom_blank');

    event.recipes.create.compacting('6x createcobblemonintegrations:advanced_bottom_blank', '4x minecraft:gold_nugget');
    event.recipes.create.pressing('createcobblemonintegrations:advanced_ball_bottom', 'createcobblemonintegrations:advanced_bottom_blank');

    event.recipes.create.cutting('10x createcobblemonintegrations:precision_bottom_blank', 'minecraft:diamond');
    event.recipes.create.pressing('createcobblemonintegrations:precision_ball_bottom', 'createcobblemonintegrations:precision_bottom_blank');

    event.recipes.create.pressing('createcobblemonintegrations:masterwork_ball_bottom', 'minecraft:nether_star');

    // 3. THE MASTER BALL DICTIONARY
    const balls = [
        { name: 'poke', color: 'red', lid: 'red', base: 'createcobblemonintegrations:pokeball_bottom' },
        { name: 'premier', color: 'white', lid: 'premier', base: 'createcobblemonintegrations:pokeball_bottom' },
        { name: 'heal', color: 'pink', lid: 'heal', base: 'createcobblemonintegrations:pokeball_bottom' },
        { name: 'roseate', color: 'pink', lid: 'roseate', base: 'createcobblemonintegrations:pokeball_bottom' },
        { name: 'azure', color: 'blue', lid: 'azure', base: 'createcobblemonintegrations:pokeball_bottom' },
        { name: 'verdant', color: 'green', lid: 'verdant', base: 'createcobblemonintegrations:pokeball_bottom' },
        { name: 'citrine', color: 'yellow', lid: 'citrine', base: 'createcobblemonintegrations:pokeball_bottom' },
        { name: 'slate', color: 'black', lid: 'slate', base: 'createcobblemonintegrations:pokeball_bottom' },
        { name: 'safari', color: 'green', lid: 'safari', base: 'createcobblemonintegrations:pokeball_bottom' },
        { name: 'great', color: 'blue', lid: 'great', base: 'createcobblemonintegrations:advanced_ball_bottom' },
        { name: 'ultra', color: 'black', lid: 'ultra', base: 'createcobblemonintegrations:precision_ball_bottom' }
    ];

    // 4. GENERATING THE ASSEMBLY LINES 
    balls.forEach(ball => {
        // Pointing to the KubeJS namespace where we successfully registered them
        let niceLid = `kubejs:${ball.lid}_ball_lid`;
        let incompleteBall = ball.name === 'poke' ? 'kubejs:incomplete_poke_ball_lid' : `kubejs:incomplete_${ball.name}_ball_lid`;
        let finalBall = `cobblemon:${ball.name}_ball`;

        event.custom({
            "type": "create:pressing",
            "ingredients": [ { "item": `cobblemon:${ball.color}_apricorn` } ],
            "results": [ { "id": niceLid, "count": 1 } ]
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": { "item": ball.base },
            "transitional_item": { "id": incompleteBall },
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        { "item": incompleteBall },
                        { "item": niceLid }
                    ],
                    "results": [ { "id": incompleteBall, "count": 1 } ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        { "item": incompleteBall },
                        { "item": "minecraft:stone_button" }
                    ],
                    "results": [ { "id": incompleteBall, "count": 1 } ]
                },
                {
                    "type": "create:pressing",
                    "ingredients": [ { "item": incompleteBall } ],
                    "results": [ { "id": incompleteBall, "count": 1 } ]
                }
            ],
            "results": [ { "id": finalBall, "count": 1 } ],
            "loops": 1
        });
    });
});