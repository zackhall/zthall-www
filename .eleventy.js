const { DateTime } = require('luxon');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const slugify = require('slugify');

module.exports = function (eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Copy static assets
  eleventyConfig.addPassthroughCopy('content/assets');
  eleventyConfig.addPassthroughCopy('static');
  eleventyConfig.addPassthroughCopy('src/styles');

  // Copy blog post images
  eleventyConfig.addPassthroughCopy('content/blog/**/images');
  eleventyConfig.addPassthroughCopy('content/blog/**/*.png');
  eleventyConfig.addPassthroughCopy('content/blog/**/*.jpg');
  eleventyConfig.addPassthroughCopy('content/blog/**/*.jpeg');
  eleventyConfig.addPassthroughCopy('content/blog/**/*.gif');

  // Date filters
  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'MMMM dd, yyyy'
    );
  });

  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  // Get the first `n` elements of a collection
  eleventyConfig.addFilter('head', (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  // Return the smallest number argument
  eleventyConfig.addFilter('min', (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  // Create blog collection
  eleventyConfig.addCollection('blog', function (collectionApi) {
    return collectionApi.getFilteredByGlob('content/blog/**/*.md').reverse();
  });

  // Customize Markdown library
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: 'after',
      class: 'direct-link',
      symbol: '#',
    }),
    level: [1, 2, 3, 4],
    slugify: s => slugify(s, { lower: true, strict: true }),
  });

  eleventyConfig.setLibrary('md', markdownLibrary);

  // Minify HTML output
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Get previous/next posts for navigation
  eleventyConfig.addFilter('getPreviousCollectionItem', function (
    collection,
    page
  ) {
    const index = collection.findIndex(item => item.url === page.url);
    return index < collection.length - 1 ? collection[index + 1] : null;
  });

  eleventyConfig.addFilter('getNextCollectionItem', function (
    collection,
    page
  ) {
    const index = collection.findIndex(item => item.url === page.url);
    return index > 0 ? collection[index - 1] : null;
  });

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    dir: {
      input: '.',
      includes: 'src/_includes',
      data: 'src/_data',
      output: '_site',
    },
  };
};
