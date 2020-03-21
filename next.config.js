const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://corona19.life',
  pagesDirectory: `${__dirname}/pages`,
  targetDirectory: 'static/'
});
