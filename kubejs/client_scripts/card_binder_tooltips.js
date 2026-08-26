ClientEvents.itemTooltip(event => {
    // ==========================================
    // MESETARRA CARD BINDER LORE & TIER INFO
    // ==========================================

    // Netherite Binder Tooltip
    event.add('cobblemon_cards:netherite_binder', [
        Text.darkPurple('§lTier IV: Netherite Binder'),
        Text.gray('Reinforced with netherite scraps and obsidian.'),
        Text.gold('Grants high-level passive RPG stat boosts when equipped.')
    ])

    // Master Binder Tooltip
    event.add('cobblemon_cards:master_binder', [
        Text.gold('§l★ Tier V: Master Binder ★'),
        Text.gray('Constructed using tinted glass and infused with max revive core energy.'),
        Text.aqua('The ultimate collector’s artifact of the Mesetarra region.')
    ])

    // Incomplete Item Tooltip (Great for letting players know it's a factory part)
    event.add('kubejs:incomplete_netherite_binder', [
        Text.yellow('§oMachining in progress... Feed through a Create assembly line.')
    ])
    
    event.add('kubejs:incomplete_master_binder', [
        Text.yellow('§oMachining in progress... Applying tactical glass reinforcement.')
    ])
})