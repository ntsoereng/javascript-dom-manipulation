const ball = document.querySelector('#ball');

ball.ondragstart = function () {
  return false;
};

ball.onmousedown = function (event) {
  // (1) PREPARE to move: make absolute and on top by z-index
  const shiftX = event.clientX - ball.getBoundingClientRect().left;
  const shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;
  // Move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(ball);

  // Center the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + 'px';
    ball.style.top = `${pageY - shiftY}px`;
  }

  // move our absolutely positioned ball UNDER THE POINTER
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) MOVE the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) DROP the ball, remove unnecessary handlers
  ball.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };
};
