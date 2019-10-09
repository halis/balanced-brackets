# balanced-brackets
Check if expression brackets are balanced with a simple stack.
Supports `()`, `[]`, `{}`, `<>`.

```javascript

const { areBracketsBalanced } = require('./balanced-brackets')

areBracketsBalanced('[hi{there(what<the>hell)}]') // true
areBracketsBalanced('(x * 2] + 2') // false
areBracketsBalanced('((x * 2])) + 2') // false
areBracketsBalanced('))((') // false
areBracketsBalanced('((x + y) + 2)') // true
```
