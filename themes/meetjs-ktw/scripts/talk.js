/**
 * Event agenda item tag plugin
 */

const util = require('hexo-util');

function speaker(args) {
  let speaker = args.join(' ');
  let anchor = util.slugize(speaker);
  return `<a class="speaker" href="/speakers/#${anchor}" title="${speaker}">${speaker}</a>`;
}

hexo.extend.tag.register('talk', ([name, title], content) => {
  return `<p>
  ${speaker([name])}
  <details>
    <summary><span class="talk-title">${title}</span></summary>
    <blockquote>${content}</blockquote>
  </details>
  </p>`;
}, { ends: true });