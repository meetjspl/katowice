/**
 * Icon link tag plugin and helper
 * 
 * @description Insert link with Font Awesome icon
 * @example
 *     {% icon_link(icon, url, title) %}
 */

function icon_link(icon, url, title = icon) {
  return `<a class="icon" target="_blank" href="${url}" title="${title}"><i class="fa fa-${icon}"></i></a>`;
}

hexo.extend.tag.register('icon_link', ([icon, url, title, ...rest]) => icon_link(icon, url, title));
hexo.extend.helper.register('icon_link', icon_link);