'use strict'
let LinkedList = require('../linkedlist');

describe('LinkedList Module()', ()=> {
    it('constructor()', ()=> {
        let newList = new LinkedList();
        expect(newList.head).toBeNull();
    });

    it('append()', ()=> {
        let newList = new LinkedList();
        let initialValue = 'First Item';
        newList.append(initialValue);
        expect(newList.head.value).toEqual(initialValue);

        let anotherOne = 'Second Item';
        newList.append(anotherOne);
        expect(newList.head.next.value).toEqual(anotherOne);
        expect(newList.head.next.next).toBeNull();
        expect(newList.head.value).toEqual(initialValue);
    });


    it("returns the value ", () => {
        const list = new LinkedList();
        list.append("1");
        list.append("3");
        list.append("8");
        list.append("2");
    
        expect(list.kthFromEnd(0)).toEqual("2");
        expect(list.kthFromEnd(2)).toEqual("3");
        expect(list.kthFromEnd(10)).toEqual(
          "the index requir is not exisst"
        );
        expect(list.kthFromEnd(-5)).toEqual("there is no linke list");
      });
    
      it("k > length ", () => {
        const list = new LinkedList();
        list.append("1");
        list.append("3");
        list.append("8");
        list.append("2");
    
        expect(list.kthFromEnd(0)).toEqual("2");
        expect(list.kthFromEnd(2)).toEqual("3");
        expect(list.kthFromEnd(10)).toEqual(
          "the index requir is not exisst"
        );
        expect(list.kthFromEnd(-5)).toEqual("there is no linke list");
        
      });
});