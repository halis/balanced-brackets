
const Stack = require('./stack')

const bracketsMatch = (o, c) => {
  if (o === '{' && c === '}') return true
  if (o === '[' && c === ']') return true
  if (o === '(' && c === ')') return true
  if (o === '<' && c === '>') return true
  return false
}

const areBracketsBalanced = string => {
  const opening = /[\{\[\(\<]/
  const closing = /[\}\]\)\>]/
  const stack = new Stack()
  const chars = string.split('')
  for (let i = 0; i < chars.length; i++) {
    let c = chars[i]
    if (opening.test(c)) {
      stack.push(c)
    } else if (closing.test(c)) {
      const o = stack.pop()
      if (!bracketsMatch(o, c)) {
        return false
      }
    }
  }

  if (stack.length()) {
    return false
  }
  return true
}

console.log(areBracketsBalanced('[hi{there(what<the>hell)}]'))
console.log(areBracketsBalanced('(x * 2] + 2'))
console.log(areBracketsBalanced('((x * 2])) + 2'))
console.log(areBracketsBalanced('))(('))
console.log(areBracketsBalanced('((x + y) + 2)'))
