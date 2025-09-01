class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function reversedLinkedList (head) {
  let curr = head
  let prev = null
  let next = null
  console.log('se crea curr, prev y next')
  console.log('curr = head', curr)
  console.log('prev es null', prev)
  console.log('next es null', next)

  while (curr) {
    console.log('------------------')
    console.log('curr', curr)
    // 1.-obtiene el original curr
    // 2.-en la segunda vuelta tiene el original a partir del segundo nodo

    next = curr.next
    console.log('next = curr.next', next)
    // 1.-guarda el proximo nodo con el resto de nodos
    // 2.-En esta vuelta tiene el tercer nodo con el resto

    console.log('solo ver que tiene curr1', curr)

    curr.next = prev
    console.log('curr.next = prev', curr.next)
    // 1.-el primer curr.next = prev esta vacio = null
    // 2.-en esta vuelta tiene el primer nodo

    console.log('solo ver que tiene curr', curr)
    // 1.-aqui solo tiene el primer nodo
    // 2.-En esta vuelta tiene el segundo nodo y dentro al primero

    prev = curr
    console.log('prev = curr', prev)
    // 1.-este tiene solo el nodo 1
    // 2.-En esta vuelta tiene el segundo nodo y dentro al primero y es donde lo esta acomodando en reversa

    curr = next
    console.log('curr = next', curr)
    // 1.-este curr ahora tiene el segundo nodo con el resto
    // 2.-este curr tiene el tercer nodo
  }
  console.log('prev final', prev)
  return prev
}

function printList (head) {
  let curr = head
  while (curr) {
    console.log(`${curr.data}->`)
    curr = curr.next
  }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head = reversedLinkedList(head)
printList(head)
