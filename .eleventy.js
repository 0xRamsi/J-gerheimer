const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function (eleventyConfig) {
  const md = markdownIt({
    html: true
  }).use(markdownItAttrs);

  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  return {
    dir: {
      input: "src",
      output: "docs",
    }
  }
}
