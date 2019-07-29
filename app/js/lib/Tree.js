import Apple from './Apple';

export default class Tree {
  /**
   * 
   * @param {Object} settings 
   */
  constructor(settings) {
    this._settings = settings;
    this._days = 0;
    this._applesBad = 0;
    this._apples = [];
    let apples = this._settings.apples;
    for(let i = 1; i <= apples; i++) this._apples.push(new Apple(this._settings.apple));
  }

  passDay() {
    //Прибавляем день и проверяем есть ли испорченные яблоки
    ++this._days;
    this._apples = this._apples.filter(apple => {
      apple.passDay();
      let appleInfo = apple.info;
      if(appleInfo.is) {
        ++this._applesBad;
        return false;
      }
      return true;
    });
    //Каждый newAppleDay дней добавляем по одному яблоку
    if(this._days % this._settings.newAppleDay === 0) this._apples.push(new Apple(this._settings.apple));
  }

  get info() {
    let applesOnTree = 0;
    let applesOnEarth = 0;

    this._apples.forEach(apple => {
      let appleInfo = apple.info;
      if(appleInfo.location) ++applesOnTree;
      else if(!appleInfo.is) ++applesOnEarth;
    });
    return {
      days: this._days,
      applesBad: this._applesBad,
      applesOnTree: applesOnTree,
      applesOnEarth: applesOnEarth,
      apples: this._apples
    };
  }
}