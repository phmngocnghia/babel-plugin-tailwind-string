const babel = require('@babel/core')
const plugins = [require('../src')]

describe('twa', () => {
  it('works', (done) => {
    const input = `\`\$\{twa\`mt-5 mb-5\`\}\``
    babel.transformAsync(input, {
      plugins
    }).then(result => {
      expect(result.code).toBe(`\`\$\{\`margin-top: 1.25rem;
  margin-bottom: 1.25rem\`\}\`;`)
      done()
    })
  })
})

describe('tws', () => {
  it('works', (done) => {
    const input = `\`\$\{tws\`sm\`\}\``
    babel.transformAsync(input, {
      plugins
    }).then(result => {
      expect(result.code).toBe(`\`\$\{\`@media (min-width: 640px)\`\}\`;`)
      done()
    })
  })
})