require('./index')

const assert = require('assert')

const str1 = `first
to capitalize <result />
`;

const expect = `First
To Capitalize <result />
`;

assert.deepStrictEqual(str1.toCapitalize(), expect)