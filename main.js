const container = document.querySelector('#container');
const log = document.querySelector('#log');

container.onmouseover = container.onmouseout = handler;

function handler(event) {
  function str(el) {
    if (!el) {
      return null;
    }
    return el.className || el.tagName;
  }

  log.value +=
    event.type +
    ': ' +
    'target=' +
    str(event.target) +
    ', relatedTarget=' +
    str(event.relatedTarget) +
    '\n';
  log.scrollTop = log.scrollHeight;

  if (event.type == 'mouseover') {
    event.target.style.background = 'cornflowerblue';
  }

  if (event.type == 'mouseout') {
    event.target.style.background = '';
  }
}
