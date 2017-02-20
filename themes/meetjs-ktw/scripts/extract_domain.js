/**
 * Domain extractor helper.
 *
 * @description Get domain part of the URL
 * @example
 *     <%- extractDomain('http://www.example.com/some/path') %>
 */

const regex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/;

hexo.extend.helper.register('extract_domain', (url) => regex.exec(url)[1]);
