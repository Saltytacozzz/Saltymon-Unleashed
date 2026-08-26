StartupEvents.registry('item', event => {
    // The transitional item for the Ultra Ball assembly line
    event.create('incomplete_ultra_ball', 'create:sequenced_assembly')
        .displayName('Incomplete Ultra Ball')
        .texture('cobblemon:item/poke_ball/ultra_ball') 

    // The transitional item for the Netherite Binder assembly line
    event.create('incomplete_netherite_binder', 'create:sequenced_assembly')
        .displayName('Incomplete Netherite Binder')
        .texture('cobblemon_cards:item/netherite_binder') // Adjust texture path if needed
})