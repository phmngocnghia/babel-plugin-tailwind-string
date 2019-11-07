const babel = require("@babel/core");
const plugins = [require("../src")];

describe("theme", () => {
  it("works with tailwind string", done => {
    const input = `\`\$\{theme\`spacing.12\`\}\``;
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

describe("apply", () => {
  it("works with extended property", done => {
    const input = `\`\$\{apply\`text-test\`\}\``;
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
    const input = `\`\$\{apply\`hyphens-none\`\}\``;
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
    const input = `\`\$\{apply\`mt-5 mb-5\`\}\``;
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

describe("screen", () => {
  it("works", done => {
    const input = `\`\$\{screen\`sm\`\}\``;
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
