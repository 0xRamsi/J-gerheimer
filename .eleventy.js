const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const linkedom = require("linkedom");

module.exports = function (eleventyConfig) {
  const pathPrefix = '/J-gerheimer';
  const md = markdownIt({
    html: true
  }).use(markdownItAttrs);

  function prefixTransformation(content) {
    if (this.page.outputPath?.endsWith(".html")) {
      const { document } = linkedom.parseHTML(content);

      const prefix = pathPrefix;

      for (const el of document.querySelectorAll(
        "a[href], img[src], script[src], link[href], source[src], video[src], audio[src]"
      )) {
        const attr = el.hasAttribute("href") ? "href" : "src";
        const value = el.getAttribute(attr);

        // Only rewrite site-relative URLs.
        if (value?.startsWith("/") && !value.startsWith("//")) {
          el.setAttribute(attr, prefix + value);
        }
      }

      return "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
    }

    return content;
  }

  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addTransform("prefixUrls", prefixTransformation);
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  return {
    pathPrefix,
    dir: {
      input: "src",
      output: "docs",
    }
  }
}
