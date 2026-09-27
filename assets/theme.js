// Light/dark theme, same behavior as The Accidental Engineer: follow the system until the reader picks one.
// Load in <head> (not deferred) so the class is set before first paint.
(function () {
  var root = document.documentElement, KEY = 'theme';
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function system() { return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
  function apply(t) { root.classList.toggle('dark', t === 'dark'); }
  apply(stored() || system());
  if (window.matchMedia) matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { if (!stored()) apply(system()); });
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.theme-toggle');
    if (!b) return;
    var next = root.classList.contains('dark') ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem(KEY, next); } catch (err) {}
    b.setAttribute('aria-label', 'Switch to ' + (next === 'dark' ? 'light' : 'dark') + ' mode');
  });
})();
