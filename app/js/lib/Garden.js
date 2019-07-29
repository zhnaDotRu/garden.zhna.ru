import Tree from './Tree';

export default class Garden {
  /**
   * 
   * @param {Object} settings 
   */
  constructor(settings) {
    this._settings = settings;
    this._trees = [];
    for(let i = 1; i <= this._settings.gardenTrees; i++) this._trees.push(new Tree(this._settings.tree)); 
    this._days = 0;
  }

  passDay() {
    ++this._days;
    //Каждый newTreeDay дней добавляем по одному яблоку
    if(this._days % this._settings.newTreeDay === 0) this._trees.push(new Tree(this._settings.tree)); 
    this._trees.forEach(tree => tree.passDay());
  }

  get info() {
    let applesBad = 0;
    let applesOnTree = 0;
    let applesOnEarth = 0;
    this._trees.forEach(tree => {
      let treeInfo = tree.info;
      applesBad += treeInfo.applesBad;
      applesOnTree += treeInfo.applesOnTree;
      applesOnEarth += treeInfo.applesOnEarth;
    });
    return {
      applesOnTree: applesOnTree,
      applesOnEarth: applesOnEarth,
      applesBad: applesBad,
      days: this._days,
      trees: this._trees,
    };
  }

  get applesOnTree() {
    return this.info.applesOnTree;
  }

  get applesOnEarth() {
    return this.info.applesOnEarth;
  }

  get applesBad() {
    return this.info.applesBad;
  }
  
  get days() {
    return this.info.days;
  }

  get countTrees() {
    return this._trees.length;
  }

}