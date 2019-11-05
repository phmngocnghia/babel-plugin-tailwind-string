const babel = require("@babel/core");
const plugins = [require("../src")];

describe("twt", () => {
  it("works with tailwind string", done => {
    const input = `\`\$\{twt\`spacing.12\`\}\``;
    babel
      .transformAsync(input, {
        plugins
      })
      .then(result => {
        expect(result.code).toBe(`\`\$\{\`3rem\`\}\`;`);
        done();
      });
  });
});

describe("twa", () => {
  it("works with extended property", done => {
    const input = `\`\$\{twa\`text-test\`\}\``;
    babel
      .transformAsync(input, {
        plugins
      })
      .then(result => {
        expect(result.code).toBe(`\`\$\{\`color: test;\`\}\`;`);
        done();
      });
  });
  it("works with tailwind plugin property", done => {
    const input = `\`\$\{twa\`hyphens-none\`\}\``;
    babel
      .transformAsync(input, {
        plugins
      })
      .then(result => {
        expect(result.code).toBe(`\`\$\{\`hyphens: none;\`\}\`;`);
        done();
      });
  });
  it("works with default tailwind property", done => {
    const input = `\`\$\{twa\`mt-5 mb-5\`\}\``;
    babel
      .transformAsync(input, {
        plugins
      })
      .then(result => {
        expect(result.code).toBe(`\`\$\{\`margin-top: 1.25rem;
  margin-bottom: 1.25rem;\`\}\`;`);
        done();
      });
  });
});

describe("tws", () => {
  it("works", done => {
    const input = `\`\$\{tws\`sm\`\}\``;
    babel
      .transformAsync(input, {
        plugins
      })
      .then(result => {
        expect(result.code).toBe(`\`\$\{\`@media (min-width: 640px)\`\}\`;`);
        done();
      });
  });
});
