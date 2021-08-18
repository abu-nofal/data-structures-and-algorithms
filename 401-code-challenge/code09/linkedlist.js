'use strict'
const Node=require('./node');
class LinkedList{
    constructor(){
        this.head = null;
    this.tail = null;
    this.length = 0;
        
    }
  

    
      append(value) {
        let newNode = new Node(value);
        if (!this.head) {
          this.head = newNode;
        } else {
          let currentNode = this.head;
          while (currentNode.next) {
            currentNode = currentNode.next;
          }
          currentNode.next = newNode;
          this.length++;
        }
      }

    toString(){
        let current=this.head;
        if(!current){
            throw new Error('there is an error linked list not exisit')
        }

        let form="";
        while(current){
            form+=`{${current.value}}-->`;
            current=current.next;
        }
        return (form +='null')
    }

    revers(){

    if(!this.head) return 'sorry but there is no linked list '
    let current=this.head;
    let prev=null;
    let next;
    while(current){
      next=current.next;
      current.next=prev;
      prev=current;
      current=next;
    }
    return prev
    
    }

    
    

}

let list1=new LinkedList();
list1.append('a')
list1.append('b')
list1.append('c')


console.log(list1.revers())