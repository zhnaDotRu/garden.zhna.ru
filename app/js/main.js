import GardenDraw from './lib/GardenDraw';
import isNaturalNumber from './lib/isNaturalNumber';
import setInfo from './lib/setInfo';
import setInput from './lib/setInput';

let settings = {
  gardenTrees: 3, //Изначально в саду 'gardenTrees' деревьев
  newTreeDay: 360, //Каждые 'newTreeDay' дней вырастает дерево
  tree: {
    apples: 10, //При создании дерева на нем будет 'apples' яблок
    newAppleDay: 30, //Каждые 'NEW_APPLE_DAY' дней добавляем по яблоку
    apple: {
      daysOnTree: 10, //Сколько дней яблоки весят на дереве
      daysOnEarth: 1, //Сколько дней яблоки лежат на земле
    },
  }
};

let drawElement = document.querySelector('.js-main');
let eSettingsPopup = document.querySelector('.js-settings-popup');
let eInput = document.querySelectorAll('.js-input-settings');
let eText = document.querySelectorAll('.js-set-num');

let Draw = new GardenDraw(drawElement, settings);
Draw.draw();
setInfo(eText, 
  Draw.days, 
  Draw.countTrees, 
  Draw.applesOnTree, 
  Draw.applesOnEarth, 
  Draw.applesBad);
let isReset = false;

//Следующий день
document.querySelector('.js-next-day').addEventListener('click', () => {
  Draw.nextDay();
  setInfo(eText, 
    Draw.days, 
    Draw.countTrees, 
    Draw.applesOnTree, 
    Draw.applesOnEarth, 
    Draw.applesBad);
}, false);

//Открыть настройки
document.querySelector('.js-open-settings').addEventListener('click', () =>{
  setInput(eInput, 
    settings.gardenTrees, 
    settings.newTreeDay, 
    settings.tree.apples, 
    settings.tree.newAppleDay, 
    settings.tree.apple.daysOnTree, 
    settings.tree.apple.daysOnEarth, 
    true);
  eSettingsPopup.classList.remove('is-closed');
} , false);

//Закрыть настройки
document.querySelector('.js-close').addEventListener('click', () => {
  isReset = false;
  eSettingsPopup.classList.add('is-closed');
}, false);

//Сбросить настройки
document.querySelector('.js-reset').addEventListener('click', () => {
  isReset = true;
  setInput(eInput, 3, 360, 10, 30, 30, 1, !isReset);
}, false);

//Сохранить настройки
document.querySelector('.js-save').addEventListener('click', () => {
  let is = true;
  eInput.forEach(element => {
    if(!isNaturalNumber(element)) is = false;
  });
  if(is) {
    settings.gardenTrees = parseInt(eInput[0].value);
    settings.newTreeDay = parseInt(eInput[1].value);
    settings.tree.apples = parseInt(eInput[2].value);
    settings.tree.newAppleDay = parseInt(eInput[3].value);
    settings.tree.apple.daysOnTree = parseInt(eInput[4].value);
    settings.tree.apple.daysOnEarth = parseInt(eInput[5].value);
    if(isReset) {
      eInput[0].disabled = isReset;
      isReset = false;
      while (drawElement.firstChild) {
        drawElement.removeChild(drawElement.firstChild);
      }
      Draw = new GardenDraw(drawElement, settings);
      Draw.draw();
      setInfo(eText, 
        Draw.days, 
        Draw.countTrees, 
        Draw.applesOnTree, 
        Draw.applesOnEarth, 
        Draw.applesBad);
    }
    eSettingsPopup.classList.add('is-closed');
  }
}, false);