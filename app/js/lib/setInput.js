/**
 * 
 * @param {NodeList} elements 
 * @param {Number} gardenTrees 
 * @param {Number} newTreeDay 
 * @param {Number} apples 
 * @param {Number} newAppleDay 
 * @param {Number} daysOnTree 
 * @param {Number} daysOnEarth 
 * @param {Boolean} isDisabled 
 */
export default function setInput(elements, gardenTrees, newTreeDay, apples, newAppleDay, daysOnTree, daysOnEarth, isDisabled) {
  elements[0].disabled = isDisabled;
  elements[0].value = gardenTrees;
  elements[1].value = newTreeDay;
  elements[2].value = apples;
  elements[3].value = newAppleDay;
  elements[4].value = daysOnTree;
  elements[5].value = daysOnEarth;
}
