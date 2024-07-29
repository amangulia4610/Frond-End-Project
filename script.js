document.getElementById('menu-toggle').addEventListener('click', function() {
  var nav = document.getElementById('mobile-nav');
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});
