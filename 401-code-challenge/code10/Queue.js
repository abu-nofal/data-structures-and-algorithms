'use strict'
const Node = require("./node");
class Queue  {
    constructor() {
    this.front=null
    }

    enqueue(value){
      let newNode= new Node(value);
      if (!this.front) {
        this.front = newNode;
        return
      } 
        let currentNode = this.front;
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      
    }
    dequeue(){
        let deltedNode=this.front
        if (!this.front) return 'Queue is empty'  
    
        this.front=this.front.next
        return deltedNode.value
    }
    peek(){
      
        if (!this.front) return 'Queue is empty'  
       
         return this.front.value
    }
    isEmpty(){
        if (!this.front) return true
       
        return false
    }
}
let queue= new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue);
console.log(queue.isEmpty());
module.exports=Queue