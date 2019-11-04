const {addDummyCssClass, removeDummyCssClass} = require('../src/utils')

describe('dummyCssClass', () => {
  const before = '@apply mt-5'
  const after = `.a {
  @apply mt-5
}`

  it('addDummyCssClass', () => {
    expect(addDummyCssClass(before)).toBe(after)
  })

  it('removeDummyCssClass', () => {
    expect(removeDummyCssClass(after).trim()).toBe(before)
  })
})