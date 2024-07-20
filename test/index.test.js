// test/index.test.js

const Kammeliya = require('../src/index');

test('greet method returns the correct string', () => {
    const kammeliya = new Kammeliya();
    expect(kammeliya.greet()).toBe('Hello from Kammeliya!');
});
