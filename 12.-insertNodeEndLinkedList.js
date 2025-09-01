class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function insertNodeEnd (head, x) {
  const newNode = new Node(x)
  let curr = head
  if (!head) {
    return newNode
  }

  while (curr.next) {
    curr = curr.next
  }

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
head.next.next.next.next.next.next.next = new Node(17)

const x = 1
head = insertNodeEnd(head, x)
printList(head)
