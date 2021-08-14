'use strict'

const Node=require('./node');

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }


    insert(value){
        let newNode= new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }
        else{
            this.tail=newNode;
            this.tail.next=newNode;
        }
        this.length++;
        return this.head;
    }

    append(value){
        let newNode= new Node(value);
        if(!this.head){
            this.head=newNode;
        }
        else{
            let currentN=this.head;
            while(currentN.next){
                currentN=currentN.next;
            }
            currentN.next=newNode;
        }
    }

    includes(value){
        let current=this.head;
        while(current){
            if(current.value === value){
                return true
            }
            current=current.next;
        }
        return false;
    }

    toString(){
        let current=this.head;
        if(!current){
            throw new Error('there is an error linked list not exisit')
        }

        let form="";
        while(current){
            form+=`{${current.value}}--->`;
            current=current.next;
        }
        return (form +='null')
    }
}

let firslist = new LinkedList();
firslist.insert(1);
firslist.append(2);


console.log(firslist.toString());
console.log(firslist.includes(2));


module.exports=LinkedList