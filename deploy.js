const fs = require('fs');
const ghpages = require('gh-pages');

fs.writeFile('_site/CNAME', 'zthall.com', function (err) {});
ghpages.publish('_site', err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Deployed successfully.');
  }
});
