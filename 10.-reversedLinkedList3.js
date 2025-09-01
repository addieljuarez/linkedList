class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function reverseList (head) {
  const stack = []
  let temp = head
  console.log('se crean stack como arreglo vacio y temp tiene el original')
  console.log('stack', stack)
  console.log('temp', temp)

  while (temp) {
    stack.push(temp)
    temp = temp.next
  }
  console.log('se llena el arreglo stack con la lista', stack)
  console.log('temp queda null por que lo recorre todo', temp)

  if (stack.length > 0) {
    head = stack.pop() // saca el ultimo elemento del arregglo
    console.log('head = stack.pop()', head)

    temp = head
    console.log('a temp se le asigna head - temp = head que tiene solo el ultimo elemento', temp)

    while (stack.length > 0) {
      console.log('--------- entra al while ---------')
      temp.next = stack.pop()
      console.log('a temp.next se le asigna el siguiente elemento del arreglo', temp)
      temp = temp.next
      console.log('se recorre el temp para el while')
    }
    temp.next = null
  }
  return head
}

function printList (head) {
  const result = []
  while (head) {
    result.push(head.data)
    head = head.next
  }
  console.log(result.join('->'))
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)

head = reverseList(head)
printList(head)
