module.exports = {
  addDummyCssClass(css) {
    let transformed = `.a {
  ${css}
}`;

    return transformed;
  },

  removeDummyCssClass(css) {
    const splitCssLines = css.split("\n");
    if (splitCssLines.length <= 1) {
      return css;
    }

    splitCssLines.splice(0, 1);
    splitCssLines.splice(splitCssLines.length - 1, 1);

    return splitCssLines.join("\n");
  }
};
