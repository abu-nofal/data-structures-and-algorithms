'use strict'
const Node=require('./node');
class LinkedList{
    constructor(){
        this.head = null;
    this.tail = null;
    this.length = 0;
        
    }
  

    // insert(val) {
    //     let newNode = new Node(val);
    //     if (!this.head) {
    //       this.head = newNode;
    //       this.tail = this.head;
    //     } else {
    //       this.tail = newNode;
    //       this.tail.next = newNode;
    //     }
    //     this.length++;
    //     return this.head;
    //   }
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

    zipLists(list1, list2){

        let newlist= new LinkedList();
        if (!list1.head) {
          return list2
        }
    
        if (!list2.head) {
          return list1
        }
    
        if (!list1.head && !list2.head) {
          return console.log('List is empty, please check your input');
        }
    
        newlist.append(list1.head.value);
        newlist.append(list2.head.value);
        let currentL1 = list1.head;
        let currentL2 = list2.head;
        let x;
    
        if (list1.length>=list2.length) {
          x = list1.length
        }else{
           x = list2.length
        }
        for (let i = 0; i <x; i++) {
    
          if (currentL1.next) {
            newlist.append(currentL1.next.value)
            currentL1=currentL1.next
          }
    
          if (currentL2.next) {
            newlist.append(currentL2.next.value)
            currentL2=currentL2.next
          }
        }
    
    
        return newlist
      }

    
    

}

// let list =new LinkedList();
// let list1 =new LinkedList();
// let list2 =new LinkedList();

// list.append(1)
// list.append(3)
// list.append(5)
// list1.append(2)
// list1.append(4)
// list1.append(6)


// console.log(list.toString());


// console.log(list1.toString());
// console.log(list2.zipLists(list,list1).toString());




module.exports = LinkedList;