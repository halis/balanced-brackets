
class Stack {
  constructor() {
    this.data = []
  }

  push(any) {
    this.data.push(any)
    return this.data.length
  }

  pop() {
    if (!this.data.length) {
      return null
    }
    return this.data.pop()
  }

  peak() {
    if (!this.data.length) {
      return null
    }
    return this.data[this.data.length - 1]
  }

  print() {
    console.info(this.data.join(', '))
  }

  length() {
    return this.data.length || 0
  }
}

module.exports = Stack
