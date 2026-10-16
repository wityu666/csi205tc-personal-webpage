'use strict';
const toggle = document.querySelector('#details-toggle');
const details = document.querySelector('#details');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  details.hidden = expanded;
  toggle.textContent = expanded ? 'Show protocol details' : 'Hide protocol details';
});
