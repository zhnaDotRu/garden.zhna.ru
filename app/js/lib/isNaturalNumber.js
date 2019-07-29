export default function isNaturalNumber(element) {
  let val = element.value;
  if(val >= 1 && Math.floor(val) === +val) {
    element.classList.remove('is-error');
    return true;
  }
  element.classList.add('is-error');
  return false;
}