const form = document.querySelector('#form');

form.addEventListener('click', function (event) {
  event.target.style.backgroundColor = 'yellow';

  // Chrome needs some time to paint yellow
  setTimeout(() => {
    alert(
      `target: ${event.target.tagName}, this(=currentTarget): ${this.tagName}`
    );
    event.target.style.backgroundColor = '';
  }, 0);
});
