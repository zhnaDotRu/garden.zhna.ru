/**
 * 
 * @param {NodeList} elements 
 * @param {Number} days 
 * @param {Number} trees 
 * @param {Number} onTree 
 * @param {Number} fall 
 * @param {Number} bad 
 */
export default function setInfo(elements, days, trees, onTree, fall, bad) {
  elements[0].innerText = days;
  elements[1].innerText = trees;
  elements[2].innerText = onTree + fall + bad;
  elements[3].innerText = onTree;
  elements[4].innerText = fall;
  elements[5].innerText = bad;
}
