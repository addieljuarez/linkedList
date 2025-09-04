class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function countNodes (head) {
  if (!head) {
    return 0
  }

  return 1 + countNodes(head.next)
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)

console.log(`Count of nodes is ${countNodes(head)}`)
