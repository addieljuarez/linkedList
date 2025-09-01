// Input: 3 -> 5 -> 8 -> 10, val = 12, pos = 3
// Output: 3 -> 5 -> 12 -> 8 -> 10

// Input: 3 -> 5 -> 8 -> 10, val = 11, pos = 5
// Output: 3 -> 5 -> 8 -> 10 -> 11

class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function insertNode (head, value, position) {
  if (position < 1) {
    return head
  }

  console.log('head', head)
  if (position === 1) {
    const newNode = new Node(value)
    newNode.next = head
    return newNode
  }

  let curr = head
  console.log('curr copia de head', curr)
  for (let i = 0; i < position - 1 && curr !== null; i++) {
    curr = curr.next
  }
  console.log('el curr despues del for', curr)

  if (!curr) {
    return head
  }

  const newNode = new Node(value)
  newNode.next = curr.next
  console.log('el new Node ', newNode)
  console.log('El curr antes de agrgarle el newNode', curr)
  curr.next = newNode

  return head
}

function printList (head) {
  let curr = head
  while (curr) {
    console.log(`${curr.data}->`)
    curr = curr.next
  }
}

let head = new Node(10)
head.next = new Node(11)
head.next.next = new Node(12)
head.next.next.next = new Node(13)
head.next.next.next.next = new Node(14)
head.next.next.next.next.next = new Node(15)
head.next.next.next.next.next.next = new Node(16)

const value = 5
const position = 3
head = insertNode(head, value, position)
printList(head)
