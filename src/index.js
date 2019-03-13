
import {cube} from './math.js'

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '6 cubed is equal to' + cube(6)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());
