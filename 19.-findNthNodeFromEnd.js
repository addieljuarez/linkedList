class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function findNthNodeFromEnd (head, position) {
  let len = 0
  let temp = head
  console.log('Temp es el head original', temp)

  while (temp) {
    temp = temp.next
    len++
  }
  console.log('el len despues del while', len)

  if (len < position) {
    return -1
  }
  console.log('el temp antes de asignarle el head de nuevo es null', temp)

  temp = head
  console.log('El temp vuelve a tener el head original', temp)
  console.log('len - position + 1', len - position + 1)
  for (let i = 1; i < len - position + 1; i++) {
    console.log('-----------------')
    console.log('i', i)
    temp = temp.next
  }

  return temp.data
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
const position = 3
console.log('data : ', findNthNodeFromEnd(head, position))

const head2 = new Node(35)
head2.next = new Node(15)
head2.next.next = new Node(4)
head2.next.next.next = new Node(20)
const position2 = 4
console.log('data : ', findNthNodeFromEnd(head2, position2))
