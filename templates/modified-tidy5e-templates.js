/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */

export const preloadTidy5eHandlebarsTemplates = async function() {

  // Define template paths to load
  const modifiedTidy5etemplatePaths = [

    // Actor Sheet Partials
    "modules/modified-tidy5e-sheet/templates/parts/modified-tidy5e-traits.html",
    "modules/modified-tidy5e-sheet/templates/parts/modified-tidy5e-inventory.html",
    "modules/modified-tidy5e-sheet/templates/parts/modified-tidy5e-features.html",
    "modules/modified-tidy5e-sheet/templates/parts/modified-tidy5e-spellbook.html"
  ];

  // Load the template parts
  return loadTemplates(modifiedTidy5etemplatePaths);
};
