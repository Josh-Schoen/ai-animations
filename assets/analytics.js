// Cloudflare Web Analytics: cookie-free page views for the site pages (home, games list, article).
// Paste the site token from Cloudflare dashboard → Analytics & Logs → Web Analytics → your site.
// Until a token is set, nothing loads. Local previews (file://, localhost) are never counted.
(function () {
  var TOKEN = '';
  var host = location.hostname;
  if (!TOKEN || location.protocol === 'file:' || host === 'localhost' || host === '127.0.0.1') return;
  var s = document.createElement('script');
  s.defer = true;
  s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  s.setAttribute('data-cf-beacon', JSON.stringify({ token: TOKEN }));
  document.head.appendChild(s);
})();
