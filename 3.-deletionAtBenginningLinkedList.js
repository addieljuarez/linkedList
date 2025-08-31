// Input : head : 3 -> 12 -> 15 -> 18 -> NULL
// Output : 12 -> 15 -> 18 -> NULL

class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function deleteHead (head) {
  // check if the list is empty

  if (head === null) {
    console.log('la lista esta vacia - deleteHead')
    return null
  }

  // store the current head in a temporary variable
  let temp = head
  console.log('variable temp - deleteHead', temp)
  // se sustituye todo el objeto por el primer next
  head = temp.next
  console.log('head = head.next - deleteHead', head)
  temp = null
  return head
}

function printList (curr) {
  while (curr !== null) {
    console.log(`${curr.data} ->`)
    curr = curr.next
  }
}

let head = new Node(3)
head.next = new Node(12)
head.next.next = new Node(15)
head.next.next.next = new Node(18)

head = deleteHead(head)
printList(head)
