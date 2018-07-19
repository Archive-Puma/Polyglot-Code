require('../lib/index')
const test = require('assert')

test.doesNotThrow(() => print('Python!'))
test.doesNotThrow(() => System.out.println('Java!'))
test.doesNotThrow(() => println('Processing!'))
test.doesNotThrow(() => fmt.printf('Go! '))
test.doesNotThrow(() => fmt.println('Go!'))
