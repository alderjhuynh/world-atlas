// Shared bootstrap: pre-initialize an empty array for every collection so
// entry files can `push` into them in any order.
//
// Load this BEFORE any entry files. It derives the collection keys from
// js/config.js, so adding a new collection to WORLD_CONFIG automatically
// gets an empty array here with no other changes.
window.WORLD_DATA = {};

if (window.WORLD_CONFIG && window.WORLD_CONFIG.collections) {
  window.WORLD_CONFIG.collections.forEach(function (collection) {
    window.WORLD_DATA[collection.key] = [];
  });
}