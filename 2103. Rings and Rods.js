/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    const map = {};
    for (let i = 0; i < rings.length; i+=2) {
        map[rings[i+1]] += rings[i];
    }

   return Object.values(map)
    .map(n => (Array.from(new Set(n.slice(9))).join('')))
    .filter(n => n.length === 3).length;
};