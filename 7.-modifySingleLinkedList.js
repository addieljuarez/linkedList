// Create a hard-coded linked list
// 10 -> 4 -> 5 -> 3 -> 6
// Output: -4 -1 5 4 10

class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

function reverse (head) {
  console.log('aqui empieza la function reversed')
  let prev = null
  let curr = head
  let next = null
  console.log('se crea prev, curr y next')
  console.log('prev es null', prev)
  console.log('curr se le asigna head', curr)
  console.log('next es null', next)

  while (curr !== null) {
    console.log('-------------- entra al while--------------')
    next = curr.next
    console.log('next se le asigna curr.next', next)
    curr.next = prev
    console.log('a curr.next se le asigna prev', curr)
    prev = curr
    curr = next
  }

  return prev
}

function modifyList (head) {
  if (head.next === null) { return head }

  let slow = head
  let fast = head
  console.log('slow y head tienen el head original')
  console.log('slow', slow)
  console.log('fast', fast)

  while (fast.next !== null && fast.next.next !== null) {
    console.log('-------------------------')
    slow = slow.next
    console.log('se le asigna a slow - slow.next', slow)
    fast = fast.next.next
    console.log('se le asigna a fast - fast.next.next', fast)
  }

  const mid = slow
  console.log('se crear mid y se le asigna slow', mid)

  let reversedList = mid.next
  console.log('se crae reversedList y se le asigna mid.next', reversedList)
  mid.next = null
  console.log('y mid.next se hace null', mid)
  reversedList = reverse(reversedList)

  let curr1 = head
  let curr2 = reversedList

  while (curr2 !== null) {
    const x = curr1.data
    curr2.data = x
    curr1 = curr1.next
    curr2 = curr2.next
  }

  mid.next = reverse(reversedList)

  return head
}

function printList (head) {
  let curr = head
  while (curr) {
    console.log(`${curr.data}`)
    curr = curr.next
  }
}

let head = new Node(10)
head.next = new Node(4)
head.next.next = new Node(5)
head.next.next.next = new Node(3)
head.next.next.next.next = new Node(6)

head = modifyList(head)

printList(head)
