StartupEvents.registry('item', event => {
    // 1. Binder & Backpack Transitionals
    event.create('incomplete_netherite_binder').displayName('Incomplete Netherite Binder').texture('cobblemon-cards:item/netherite_binder') 
    event.create('incomplete_master_binder').displayName('Incomplete Master Binder').texture('cobblemon-cards:item/master_album') 
    event.create('incomplete_netherite_tier').displayName('Incomplete Netherite Tier').texture('sophisticatedbackpacks:item/netherite_backpack') 

    // 2. Custom Poké Ball Lids (Using the 3D models natively)
    const ballTypes = ['poke', 'premier', 'heal', 'roseate', 'azure', 'verdant', 'citrine', 'slate', 'safari', 'great', 'ultra']
    
    ballTypes.forEach(ball => {
        let lidName = ball === 'poke' ? 'red' : ball;
        // Registers the finished lid
        event.create(`${lidName}_ball_lid`)
            .displayName(`${lidName.charAt(0).toUpperCase() + lidName.slice(1)} Ball Lid`)
            .texture(`cobblemore_lib:item/${lidName}_ball_lid`);
            
        // Registers the incomplete assembly item
        event.create(`incomplete_${ball}_ball_lid`)
            .displayName(`Incomplete ${ball.charAt(0).toUpperCase() + ball.slice(1)} Ball`)
            .texture(`cobblemore_lib:item/incomplete_${ball}_ball_lid`);
    });
});