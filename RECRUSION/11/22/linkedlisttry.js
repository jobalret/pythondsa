class Linked_node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

var prev = null
var head = null
var node1 = new Linked_node(7)   // new Linked_node (name used in class contructor) will create a new node
var node2 = new Linked_node(4)   
var node3 = new Linked_node(7)
console.log(node1.next)