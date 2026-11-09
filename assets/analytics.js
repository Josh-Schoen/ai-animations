// Page analytics for every page: the site pages (home, games list, article) and each game.
// Google Analytics 4 uses the same property as accidentalengineer.ai; filter by hostname in GA to split the two sites.
// Cloudflare Web Analytics is an optional cookie-free extra: paste a site token from the Cloudflare
// dashboard (Analytics & Logs, Web Analytics) into CF_TOKEN to turn it on.
// Local previews (file://, localhost) are never counted.
(function () {
  var GA_ID = 'G-B6TRPL2GWZ';
  var CF_TOKEN = '';
  var host = location.hostname;
  if (location.protocol === 'file:' || host === 'localhost' || host === '127.0.0.1') return;

  if (GA_ID) {
    var ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(ga);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  if (CF_TOKEN) {
    var cf = document.createElement('script');
    cf.defer = true;
    cf.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    cf.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_TOKEN }));
    document.head.appendChild(cf);
  }
})();
