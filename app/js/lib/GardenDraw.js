import Garden from './Garden';

export default class GardenDraw extends Garden {
  /**
   * 
   * @param {Element} elementDraw 
   * @param {Object} settings 
   */
  constructor(elementDraw, settings) {
    super(settings);
    this._elementDraw = elementDraw;
    this._draw = [];
  }

  draw() {
    let gardenInfo = this.info;
    gardenInfo.trees.forEach(tree => {
      let treeInfo = tree.info;
      let newTree = this._createTree(treeInfo.days, treeInfo.applesOnTree, treeInfo.applesOnEarth, treeInfo.applesBad);
      this._draw.push(newTree);
      this._elementDraw.appendChild(newTree.tree);
    });
  }

  nextDay() {
    this.passDay();
    let gardenInfo = this.info;
    gardenInfo.trees.forEach((tree, i) => {
      let treeInfo = tree.info;
      let element = this._draw[i];
      if(typeof element !== 'undefined') {
        element.days.innerText = treeInfo.days;
        element.onTree.innerText = treeInfo.applesOnTree;
        element.onEarth.innerText = treeInfo.applesOnEarth;
        element.bad.innerText = treeInfo.applesBad;
      }else{
        let newTree = this._createTree(treeInfo.days, treeInfo.applesOnTree, treeInfo.applesOnEarth, treeInfo.applesBad);
        this._draw.push(newTree);
        this._elementDraw.appendChild(newTree.tree);
      }
    });
  }

  /**
   * 
   * @param {string} valDays 
   * @param {string} valOnTree 
   * @param {string} valOnEarth 
   * @param {string} valBad 
   */
  
  _createTree(valDays, valOnTree, valOnEarth, valBad) {
    let tree = document.createElement('div');
    tree.className = 'tree';

    let img = document.createElement('img');
    img.className = 'tree-img';
    img.src = './img/tree.png';

    let info = document.createElement('div');
    info.className = 'tree-info';

    let days = this._createText('Days: ', valDays);
    info.appendChild(days.p);
    let onTree = this._createText('On tree: ', valOnTree);
    info.appendChild(onTree.p);
    let onEarth = this._createText('On earth: ', valOnEarth);
    info.appendChild(onEarth.p);
    let bad = this._createText('Bad: ', valBad);
    info.appendChild(bad.p);

    tree.appendChild(img);
    tree.appendChild(info);

    return {
      tree: tree,
      days: days.span,
      onTree: onTree.span,
      onEarth: onEarth.span,
      bad: bad.span,
    };
  }

  /**
   * 
   * @param {string} text 
   * @param {string} val 
   */
  _createText(text, val) {
    let p = document.createElement('p');
    p.className = 'tree-info-text';
    p.innerHTML = text;
    let span = document.createElement('span');
    span.innerText = val;
    p.appendChild(span);
    return {p: p, span: span};
  }
}