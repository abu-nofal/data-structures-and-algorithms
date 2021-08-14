'use strict';

let LinkedList = require('../linkedlist');

describe('LinkedList Module()', ()=> {
    it('constructor()', ()=> {
        let newList = new LinkedList();
        expect(newList.head).toBeNull();
    });
    // -------to test the append method   
    it('append()', ()=> {
        let newList = new LinkedList();
        let initialValue = 1;
        newList.append(initialValue);
        expect(newList.head.value).toEqual(initialValue);

        let anotherOne = 'Second Item';
        newList.append(anotherOne);
        expect(newList.head.next.value).toEqual(anotherOne);
        expect(newList.head.next.next).toBeNull();
        expect(newList.head.value).toEqual(initialValue);
    });

     // -------to test the includes method 

    it('includes() tru',()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.append(2);
        expect(newList.includes(2)).toEqual(true);
    });
    it('include() false',()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.append(2);
        expect(newList.includes(5)).toEqual(false);
    });

    // --------to test the toString method 

    it('toString()',()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.append(2);
        expect(newList.toString()).toEqual('{1}-->{2}-->NULL');
    });
    it('toString() not exisit',()=>{
        let newList=new LinkedList;
        newList.toString()
        expect(newList.head).toEqual(null);
    });


    // -------to test the insert method 
    it('insert()',()=>{
        let newList=new LinkedList();
        newList.insert(1);
        expect(newList.head.value).toEqual(1);
        expect(newList.head.next).toBeNull();
    });
    it('insert() many node',()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.append(2);
        expect(newList.head.value).toEqual(1);
        expect(newList.head.next.value).toEqual(2);
    });
});