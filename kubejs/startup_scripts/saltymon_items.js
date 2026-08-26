StartupEvents.registry('item', event => {
    // The transitional item for the Ultra Ball assembly line
    event.create('incomplete_ultra_ball')
        .displayName('Incomplete Ultra Ball')
        .texture('cobblemon:item/poke_ball/ultra_ball') 
        .type('create:sequenced_assembly')
})