
// class Node {
//     constructor(e) {
//         this.data = e;
//         this.next = null;
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     add(e) {
//         var node = new Node(e);
//         var current;
//         if (this.head == null) {
//             this.head = node;
//         } else {
//             current = this.head;
//             while (current.next != null) {
//                 current = current.next;
//             }
//             current.next = node;
//         }
//         this.size++;
//     }
//     printList() {
//         var current = this.head;
//         var str = '';
//         while (current) {
//             str += current.data + " --> "
//             current = current.next;
//         }
//         console.log(str);
//     }
// }

// var ll = new LinkedList();

// ll.add(10);
// ll.add(20);
// ll.printList();



class Node {
    constructor(e) {
        this.data = e;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.last = null;
        this.size = 0;
    }
    addAtEnd(e) {
        var node = new Node(e);
        if (this.head == null) {
            this.head = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
    }
    addAtBegining(e) {
        var node = new Node(e);
        if (this.head == null) {
            this.head = node;
            this.last = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    addInBtw(i, data) {
        var node = new Node(data)
        if (i > 0 && i < this.size - 1) {
            var current = this.head;
            while (i) {
                console.log(current.data);
                current = current.next;
                i--;
            }
            node.next = current.next;
            current.next = node;
            this.size++;
        } else if (i == 0) {
            this.addAtBegining(data)
        } else if (i == this.size - 1) {
            this.addAtEnd(data)
        } else {
            console.log("Invalid Position");
        }
    }
    deleteAtEnd() {
        if (this.head == this.last) {
            this.head = null;
            this.last = null;
        } else {
            var current = this.head;
            while (current.next.next != null) {
                current = current.next;
            }
            current.next = null;
            this.next = current;
        }
        this.size--;
    }
    deleteAtBegining() {
        if (this.head == this.last) {
            this.head = null;
            this.last = null;
        } else {
            this.head = this.head.next;
        }
        this.size--;
    }
    deleteInBtw(i) {
        if (i > 0 && i < this.size - 1) {
            var current = this.head;
            while (i) {
                current = current.next;
                i--;
            }
            current.next = current.next.next;
        } else if (i == 0) {
            this.deleteAtBegining();
        } else if (i == this.size - 1) {
            this.deleteAtEnd();
        } else {
            console.log("Invalid Position");
        }
    }
    printList() {
        var current = this.head;
        var str = ""
        while (current) {
            str += current.data + " --> "
            current = current.next;
        }
        console.log(str);
    }
}

var ll = new LinkedList();

ll.addAtEnd(10);
ll.addAtEnd(20);
ll.addAtEnd(30);
ll.addAtEnd(40);
ll.addAtEnd(50);
ll.addAtEnd(60);
ll.addInBtw(0, 100);
ll.printList();
ll.deleteInBtw(3);

// ll.deleteAtBegining();
// ll.addAtBegining(5); 
// ll.deleteAtEnd();

ll.printList();
