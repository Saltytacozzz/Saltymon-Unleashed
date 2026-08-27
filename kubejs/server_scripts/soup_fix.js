ServerEvents.recipes(event => {
    // Re-add standard mushroom and beetroot stews safely
    event.shapeless('minecraft:mushroom_stew', ['minecraft:bowl', 'minecraft:brown_mushroom', 'minecraft:red_mushroom'])
    event.shapeless('minecraft:beetroot_soup', ['minecraft:bowl', '5x minecraft:beetroot'])
    
    // Rabbit stews
    event.shapeless('minecraft:rabbit_stew', ['minecraft:bowl', 'minecraft:cooked_rabbit', 'minecraft:baked_potato', 'minecraft:carrot', 'minecraft:brown_mushroom'])
    event.shapeless('minecraft:rabbit_stew', ['minecraft:bowl', 'minecraft:cooked_rabbit', 'minecraft:baked_potato', 'minecraft:carrot', 'minecraft:red_mushroom'])
})