export default class Apple {
  /**
   * 
   * @param {Object} settings 
   */
  constructor(settings) {
    this._settings = settings;
    this._days = 0;
    this._daysOnTree = this._settings.daysOnTree;
    this._daysOnEarth = this._settings.daysOnEarth;
    this._maxDay = this._daysOnTree + this._daysOnEarth;
  }
  
  passDay() {
    ++this._days;
  }

  get info() {
    let onEarth = this._days - this._daysOnTree;
    let corruption = onEarth <= 0 ? 0 : onEarth * 100 / this._daysOnEarth;
    return {
      days: this._days, 
      corruption: corruption,
      location: this._days <= this._daysOnTree,
      is: this._days > this._maxDay,
    };
  }
}