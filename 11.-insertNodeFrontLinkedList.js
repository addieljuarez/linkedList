class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function insertAtFront (head) {
  const newNode = new Node(x)
  newNode.next = head
  return newNode
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
head.next.next.next.next.next.next.next = new Node(17)

const x = 1
head = insertAtFront(head, x)

printList(head)
