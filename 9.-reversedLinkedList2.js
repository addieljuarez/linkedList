class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function reversedList (head) {
  console.log('head', head)
  if (!head || !head.next) {
    return head
  }

  console.log('-------------------')
  const rest = reversedList(head.next)
  console.log('rest', rest)

  console.log('head.next.next', head.next.next)
  console.log('head', head)
  head.next.next = head

  console.log('head.next', head.next)
  head.next = null

  console.log('rest', rest)
  return rest
}

function printList (head) {
  let curr = head
  while (curr) {
    console.log(`${curr.data}->`)
    curr = curr.next
  }
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

reversedList(head)
printList(head)
