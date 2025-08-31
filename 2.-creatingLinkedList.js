class Node {
  constructor (value) {
    console.log('entra a constructor de la clase - Node')
    this.value = value
    console.log('this.value constructor - Node', this.value)
    this.next = null
    console.log('this.next constructor - Node', this.next)
  }
}

class LinkedList {
  constructor () {
    console.log('entra al constructor - LinkedList')
    this.head = null
    console.log('this.head constructor - LinkedList', this.head)
  }

  append (value) {
    console.log('inicia el append y entra el value - append', value)
    console.log('se instancia la clase Node - append')
    const newNode = new Node(value)
    console.log('newNode - append', newNode)
    console.log('revisa si tiene this.head - append', this.head)
    if (!this.head) {
      console.log('entra al this.head - append')
      this.head = newNode
      console.log('termina el primero y se le asigna el head - append', this.head)
      return
    }

    console.log('si no es el primer continua aqui - append')
    let current = this.head
    console.log('current se le agrega el head - append', current)
    console.log('revisa si tiene un next current.next', current.next)
    while (current.next) {
      console.log('entra al while - append')
      current = current.next
      console.log('current del while - append', current)
    }
    console.log('current al terminar del while - append', current)
    current.next = newNode
    console.log('current.next cuando se le asigna el newNode - append', current.next)
  }

  printList () {
    let current = this.head
    let result = ''
    while (current) {
      result += `${current.value}->`
      current = current.next
    }
    console.log(`${result}null`)
  }
}

console.log('====================================================')
const list = new LinkedList()
console.log('====================================================')
list.append(10)
console.log('====================================================')
list.append(20)
console.log('====================================================')
list.append(30)
console.log('====================================================')
list.append(40)
console.log('====================================================')
list.append(50)
console.log('====================================================')
list.printList()
