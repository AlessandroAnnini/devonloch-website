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
  const current = navlinks.findIndex((el) =>
    el.classList.contains('links--current')
  );
  const navigate = (linkEl) => {
    document.body.classList.remove('render');
    document.body.addEventListener(
      'transitionend',
      () => (window.location = linkEl.href)
    );
  };
  navlinks.forEach((link) =>
    link.addEventListener('click', (ev) => {
      ev.preventDefault();
      navigate(ev.target);
    })
  );
  imagesLoaded('.glitch__img', { background: true }, () => {
    document.body.classList.remove('loading');
    document.body.classList.add('imgloaded');
    initRandomGlitch();
  });

  // Random glitch effect controller
  function initRandomGlitch() {
    const glitchContainer = document.querySelector('.glitch');

    function scheduleNextGlitch() {
      // Random delay between 5000-12000ms (5-12 seconds)
      const randomDelay = Math.random() * 7000 + 5000;

      setTimeout(() => {
        triggerGlitch();
      }, randomDelay);
    }

    function triggerGlitch() {
      // Random animation duration between 2000-4000ms (2-4 seconds)
      const randomDuration = Math.random() * 2000 + 2000;

      // Set CSS custom property for animation duration
      glitchContainer.style.setProperty('--time-anim', `${randomDuration}ms`);

      // Add class to trigger animation
      glitchContainer.classList.add('glitch--active');

      // After animation completes, remove class and schedule next glitch
      setTimeout(() => {
        glitchContainer.classList.remove('glitch--active');
        // Force reflow to ensure animation can retrigger
        void glitchContainer.offsetWidth;
        scheduleNextGlitch();
      }, randomDuration);
    }

    // Start the first glitch immediately
    triggerGlitch();
  }
}
