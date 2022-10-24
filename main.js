const menu = document.querySelector('#menu');

menu.onclick = function (event) {
  if (event.target.nodeName != 'A') {
    return;
  }

  const href = event.target.getAttribute('href');

  alert(href);

  return false; // prevent URL change
};
