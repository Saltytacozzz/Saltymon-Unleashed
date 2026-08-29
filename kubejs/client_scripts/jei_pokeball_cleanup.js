RecipeViewerEvents.removeEntries('item', event => {
    // Purges the ugly 2D Create Cobblemon Integrations tops
    event.remove(/createcobblemonintegrations:.*_ball_top/);
    event.remove('createcobblemonintegrations:pokeball_top');
});