class Node {
  constructor (data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

const head = new Node(10)
head.next = new Node(20)
head.next.prev = head

head.next.next = new Node(30)
head.next.next.prev = head.next

head.next.next.next = new Node(40)
head.next.next.next.prev = head.next.next

console.log('head original', head)
let temp = head
let output = ''

while (temp) {
  output += temp.data
  if (temp.next) {
    output += '<->'
  }
  temp = temp.next
}

console.log(output)
