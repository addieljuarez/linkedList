// Input: LinkedList = 1->3->1->2->1
// Output: 5
// Explanation: The linked list has 5 nodes.

class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function countNodes (head) {
  let curr = head
  let count = 0

  while (curr) {
    count++
    curr = curr.next
  }
  console.log(`The linked list has ${count} nodes.`)
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)

countNodes(head)
