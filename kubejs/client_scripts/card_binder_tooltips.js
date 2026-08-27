ItemEvents.modifyTooltips(event => {
    const DIAMOND_BINDER = 'cobblemon-cards:diamond_binder'; 
    const NETHERITE_BINDER = 'cobblemon-cards:netherite_binder';
    const MASTER_BINDER = 'cobblemon-cards:master_album'; 

    // Binder Lore
    event.add(DIAMOND_BINDER, [ Text.gold('A high-tier card binder.') ])
    event.add(NETHERITE_BINDER, [ Text.darkPurple('§lTier IV: Netherite Binder') ])
    event.add(MASTER_BINDER, [ Text.gold('§l★ Tier V: Master Album ★') ])
    
    // Incomplete Factory Parts Lore
    event.add('kubejs:incomplete_netherite_binder', [ Text.yellow('§oMachining in progress...') ])
    event.add('kubejs:incomplete_master_binder', [ Text.yellow('§oMachining in progress...') ])
})