ServerEvents.tags('item', event => {
    // ==========================================
    // UNIFYING MODDED ITEMS INTO STANDARD TAGS
    // ==========================================
    
    // Example: Ensure custom modded apricorns or berries map cleanly to standard tags 
    // so any automation farm output can be fed into your Poké Ball or cooking recipes.
    event.add('forge:apricorns', [
        'cobblemon:red_apricorn',
        'cobblemon:yellow_apricorn',
        'cobblemon:black_apricorn',
        'cobblemon:blue_apricorn',
        'cobblemon:green_apricorn',
        'cobblemon:pink_apricorn',
        'cobblemon:white_apricorn'
    ])

    // Grouping high-tier glass alternatives for your binder assembly lines
    event.add('forge:reinforced_glass', [
        'minecraft:tinted_glass',
        'minecraft:glass'
    ])
})