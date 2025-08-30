// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 1 -> 2 -> 3 -> 4 -> NULL 
// Explanation: The last node of the linked list is 5, so 5 is deleted. 

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

function removeLastNode(head){
    if(!head){
        console.log('Si esta vacio y no hya head')
        return null
    }

    if(!head.next){
        console.log('Si en la lista solo hay un nodo')
        return null
    }

    
    let secondLast = head
    console.log('asigna toda la llista en la variable secondLast:', secondLast)
    while (secondLast.next.next){
        console.log('Encuentra el segundo ultimo nodo secondLast.next.next', secondLast.next.next)
        console.log('Le asigna el secondLast.next ')
        secondLast = secondLast.next
        console.log('Le asigna el secondLast ', secondLast)
    }
    

    secondLast.next = null
    console.log('Vuelve null la variable secondLast', secondLast)

    console.log('regresa la lista sin el ultimo nodo', head)
    return head
}

function printList(head){
    while(head){
        console.log(head.data + '->')
        head = head.next
    }

    console.log('null')
}


let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log('Original List: ');
printList(head)

head = removeLastNode(head)
console.log('List After Removing the last node')
printList(head)