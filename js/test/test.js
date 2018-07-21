require('../lib/index')
const test = require('assert')

// Print
test.doesNotThrow(() => Console.Write('C# / VB.NET '))
test.doesNotThrow(() => fmt.printf('Go '))
test.doesNotThrow(() => putStr('Haskell '))

// Print Line
test.doesNotThrow(() => trace('ActionScript'))
test.doesNotThrow(() => Console.WriteLine('C# / VB.NET'))
test.doesNotThrow(() => print('Dart'))
test.doesNotThrow(() => fmt.println('Go'))
test.doesNotThrow(() => putStrLn('Haskell'))
test.doesNotThrow(() => System.out.println('Java'))
test.doesNotThrow(() => println('Kotlin'))
test.doesNotThrow(() => io.write('Lua\n'))
test.doesNotThrow(() => println('Processing'))
test.doesNotThrow(() => print('Python'))
