// Input: position = 2, Linked List = 8->2->3->1->7
// Output: Linked List =  8->3->1->7

class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function deleteNode (head, position) {
  let temp = head
  let prev = null

  // list is empty
  if (!temp) {
    return head
  }

  // case 1: Head is to be deleted
  if (position === 1) {
    head = temp.next
    return head
  }

  // case 2: Node to be deleted is in middle
  // Traverse till given position
  for (let i = 1; temp !== null && i < position; i++) {
    console.log('entra al for', i)
    prev = temp
    console.log('el prev obtiene el temp', prev)
    temp = temp.next
    console.log('el temp obtiene el siguiente next', temp)
  }

  // if given position is found delete node
  if (temp !== null) {
    console.log('Entra al if donde temp no es null')
    console.log('sustituye prev.next por temp.next aqui es cuando lo sustituye')
    console.log('prev.next', prev.next)
    console.log('temp.next', temp.next)
    prev.next = temp.next
  } else {
    console.log('Data not present')
  }

  return head
}

function printList (head) {
  while (head) {
    console.log(head.data + '->')
    head = head.next
  }
  console.log('Null')
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

console.log('Original List')
printList(head)

const position = 3
head = deleteNode(head, position)
console.log('List After deletion')
printList(head)
