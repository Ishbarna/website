(function () {
  var root = document.documentElement;
  var button = document.querySelector('[data-theme-toggle]');
  var savedTheme = localStorage.getItem('blog-theme');

  if (savedTheme) root.setAttribute('data-theme', savedTheme);
  if (!button) return;

  button.addEventListener('click', function () {
    var nextTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem('blog-theme', nextTheme);
  });
})();
