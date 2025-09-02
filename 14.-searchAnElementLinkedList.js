class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function searchKey (head, key) {
  let curr = head
  // let find = false

  while (curr) {
    console.log('curr.data === key', curr.data === key)
    if (curr.data === key) {
      // find = true
      console.log(`si existe el ${key} en la lista`)
      return
    }
    curr = curr.next
  }
  // return head
  console.log(`no existe el ${key} en la lista`)
}

const head = new Node(10)
head.next = new Node(11)
head.next.next = new Node(12)
head.next.next.next = new Node(13)
head.next.next.next.next = new Node(14)
head.next.next.next.next.next = new Node(15)
head.next.next.next.next.next.next = new Node(16)
head.next.next.next.next.next.next.next = new Node(17)

const key = 13
searchKey(head, key)
