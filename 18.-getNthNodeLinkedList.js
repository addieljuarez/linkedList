class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function searchIndex (head, value) {
  let curr = head
  let index = 1

  while (curr) {
    if (curr.data === value) {
      return index
    }
    curr = curr.next
    index++
  }

  return -1
}

const head = new Node(10)
head.next = new Node(11)
head.next.next = new Node(12)
head.next.next.next = new Node(13)
head.next.next.next.next = new Node(14)
head.next.next.next.next.next = new Node(15)
head.next.next.next.next.next.next = new Node(16)
head.next.next.next.next.next.next.next = new Node(17)
head.next.next.next.next.next.next.next.next = new Node(18)

const value = 15
console.log('index', searchIndex(head, value))
