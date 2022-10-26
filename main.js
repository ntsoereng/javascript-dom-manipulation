const thumb = document.querySelector('.slider__thumb');
const slider = document.querySelector('#slider');

thumb.onpointerdown = function (event) {
  // Prevent default browser action: selection start
  event.preventDefault();

  const shiftX = event.clientX - thumb.getBoundingClientRect().left;
  // shiftY not needed, thumb only moves horizontally

  document.addEventListener('pointermove', onMouseMove);
  document.addEventListener('pointerup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

    // The pointer is out of slider --> lock thumb within the boundaries
    if (newLeft < 0) {
      newLeft = 0;
    }

    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = `${newLeft}px`;
  }

  function onMouseUp() {
    document.removeEventListener('pointermove', onMouseUp);
    document.removeEventListener('pointermove', onMouseMove);
  }
};

thumb.ondragstart = function () {
  return false;
};
