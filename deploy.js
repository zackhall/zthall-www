const fs = require('fs');
const ghpages = require('gh-pages');

fs.writeFile('public/CNAME', 'zthall.com', function (err) {});
ghpages.publish('public', err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Deployed successfully.');
  }
});
