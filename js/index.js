/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
  setTimeout(() => document.body.classList.add('render'), 60);
  const navlinks = Array.from(document.querySelectorAll('nav.links > .links'));
  const total = navlinks.length;
  const current = navlinks.findIndex(el =>
    el.classList.contains('links--current')
  );
  const navigate = linkEl => {
    document.body.classList.remove('render');
    document.body.addEventListener(
      'transitionend',
      () => (window.location = linkEl.href)
    );
  };
  navlinks.forEach(link =>
    link.addEventListener('click', ev => {
      ev.preventDefault();
      navigate(ev.target);
    })
  );
  document.addEventListener('keydown', ev => {
    const keyCode = ev.keyCode || ev.which;
    let linkEl;
    if (keyCode === 37) {
      linkEl = current > 0 ? navlinks[current - 1] : navlinks[total - 1];
    } else if (keyCode === 39) {
      linkEl = current < total - 1 ? navlinks[current + 1] : navlinks[0];
    } else {
      return false;
    }
    navigate(linkEl);
  });
  imagesLoaded('.glitch__img', { background: true }, () => {
    document.body.classList.remove('loading');
    document.body.classList.add('imgloaded');
  });
}
