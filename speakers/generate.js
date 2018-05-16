const fs = require('fs');
const ejs = require('ejs');

const data = require('./list.json');

ejs.renderFile('./index.md.ejs', { speakers: data }, { rmWhitespace: false }, (err, str) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFileSync('../source/speakers/index.md', str, { mode: '655' });
  }
});
