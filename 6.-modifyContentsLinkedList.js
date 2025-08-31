// Input: head: 10 -> 4 -> 5 -> 3 -> 6
// Output: -4 -> -1 -> 5 -> 4 -> 10

class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function countNodes (head) {
  let count = 0
  console.log('Se inicia el conteo en cero', count)
  let curr = head
  console.log('se crea la variable curr y se le asigna la lista completa', curr)

  while (curr !== null) {
    console.log('El conteo antes de sumar', count)
    count++
    console.log('El conteo al sumar', count)
    curr = curr.next
    console.log('Aqui se continua el proximo next')
  }

  console.log('El return del conteo', count)
  return count
}

function linkedListToList (head, list) {
  let curr = head
  while (curr) {
    list.push(curr.data)
    curr = curr.next
  }
  return list
}

function listToLinkedList (list, head) {
  let curr = head
  for (let i = 0; i < list.length; i++) {
    curr.data = list[i]
    curr = curr.next
  }

  return head
}

function modifyLits (list) {
  const n = list.length
  const numberFloor = Math.floor(n / 2)
  console.log('numberFloor', numberFloor)
  console.log('array antes de modificar', list)
  for (let i = 0; i < numberFloor; ++i) {
    const x = list[i]
    console.log('x = list[i]:', x)
    list[i] = list[n - i - 1] - x
    console.log('list[n - i - 1] - x:', list[n - i - 1] - x)
    console.log('x', x)
    console.log('list[n - i - 1]', list[n - i - 1])
    list[n - i - 1] = x
  }
  console.log('array despues de modificar', list)
}

function modifyTheList (head) {
  if (head.next === null) {
    return head
  }

  const n = countNodes(head)
  console.log('Count Nodes number', n)
  const list = []
  const listToArray = linkedListToList(head, list)

  console.log('linked list to list array', listToArray)
  modifyLits(list)
  const arrayToList = listToLinkedList(list, head)
  console.log('arrayToList', arrayToList)
  return head
}

function printList (head) {
  let curr = head
  while (curr) {
    console.log(`${curr.data}->`)
    curr = curr.next
  }
  console.log('Null')
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
console.log('Lista antes de modificar')
printList(head)
modifyTheList(head)
console.log('Lista despues de modificar')
printList(head)
