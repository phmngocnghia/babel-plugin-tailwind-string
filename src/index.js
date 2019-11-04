var deasync = require('deasync-promise');
var postCss = require('postcss')
var t = require('@babel/types')
var postCssInstance = postCss([require('tailwindcss')])

const returnPromise = (css) => {
  return new Promise(async resolve => {
    const transformedCssResult = await postCssInstance.process(css, {from: null, to: null})
    resolve(transformedCssResult.css)
  })
}

module.exports = function () {
  console.log('Hello world')
  return {
    visitor: {
      TaggedTemplateExpression(path) {
        if (path.node.tag.name === 'tw') {
          const quasis = path.node.quasi.quasis[0]
          const css = quasis.value.raw
          const transformValue = deasync(returnPromise(css))
          path.traverse({
            TemplateElement(path) {
              path.node.value.raw = '\n' + transformValue
            }
          })
        }
      }
    }
  }
}