const thumb = document.querySelector('.slider__thumb');
const slider = document.querySelector('#slider');
let shiftX;
function onThumbDown(event) {
  event.preventDefault(); // prevent selection start (browser action)

  shiftX = event.clientX - thumb.getBoundingClientRect().left;

  thumb.setPointerCapture(event.pointerId);

  thumb.onpointermove = onThumbMove;

  thumb.onpointerup = event => {
    // dragging finished, no need to track pointer any more
    // ...any other "drag end" logic here...
    thumb.onpointermove = null;
    thumb.onpointerup = null;
  };
}

function onThumbMove(event) {
  let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

  // if the pointer is out of slider => adjust left to be within the boundaries
  if (newLeft < 0) {
    newLeft = 0;
  }
  let rightEdge = slider.offsetWidth - thumb.offsetWidth;
  if (newLeft > rightEdge) {
    newLeft = rightEdge;
  }

  thumb.style.left = newLeft + 'px';
}

thumb.onpointerdown = onThumbDown;

thumb.ondragstart = () => false;
