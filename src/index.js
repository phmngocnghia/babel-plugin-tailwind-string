const deasync = require('deasync-promise');
const postCss = require('postcss')
const t = require('@babel/types')
const postCssInstance = postCss([require('tailwindcss')])
const {addDummyCssClass, removeDummyCssClass} = require('./utils')
const dlv = require('dlv')


const transformTailwind = (str) => {
  return new Promise(async resolve => {
    const transformedResult = await postCssInstance.process(str, {from: null, to: null})
    resolve(transformedResult.css)
  })
}

module.exports = function () {
  return {
    visitor: {
      /**
       * Input example: mt-5 mb-4
       */
      TaggedTemplateExpression(path) {
        /**
         * twa
         * 1/ add @apply if twa, @screen if tws
         * 2/ add dummy class
         * 3/ transform code using postcss
         * 4/ remove dummy classs
         * 5/ replace tw`value` -> 'generated value'
         */
        const tagName = path.node.tag.name
        if (['twa', 'tws'].includes(tagName)) {
          const quasis = dlv(path,'node.quasi.quasis.0')
          if (!quasis) {
            return
          }

          let value = quasis.value.raw
          if (!value) return

          if (tagName === 'twa') {
            value = '@apply ' + value
          } else {
            value = '@screen ' + value
          }

          value = addDummyCssClass(value)
          let transformedValue = deasync(transformTailwind(value))
          
          transformedValue = removeDummyCssClass(transformedValue)
          transformedValue = `\`${transformedValue.trim()}\``
          path.replaceWithSourceString(transformedValue)
        }
      }
    }
  }
}