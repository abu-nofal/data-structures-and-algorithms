"use strict";
let LinkedList = require("../linkedlist");

describe("LinkedList Module()", () => {
  it("constructor()", () => {
    let newList = new LinkedList();
    expect(newList.head).toBeNull();
  });

  it("append()", () => {
    let newList = new LinkedList();
    let initialValue = "First Item";
    newList.append(initialValue);
    expect(newList.head.value).toEqual(initialValue);

    let anotherOne = "Second Item";
    newList.append(anotherOne);
    expect(newList.head.next.value).toEqual(anotherOne);
    expect(newList.head.next.next).toBeNull();
    expect(newList.head.value).toEqual(initialValue);
  });

  it("zipLists  Happy case", () => {
    
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);

    let list2 = new LinkedList();
    list2.append(2);
    list2.append(4);
    list2.append(6);
    let newList = new LinkedList();
    expect(newList.zipLists(list1, list2).toString()).toEqual(
        "{1}-->{2}-->{3}-->{4}-->{5}-->{6}-->null"
    );
  });


  it("zipLists if passed empty list", () => {
    let newList = new LinkedList();
    let list1 = new LinkedList();

    let list2 = new LinkedList();
    list2.append(1);
    list2.append(3);
    list2.append(5);
    list2.append(7);
    list2.append(9);
    expect(newList.zipLists(list1, list2).toString()).toEqual(
      "{1}-->{3}-->{5}-->{7}-->{9}-->null"
    );
  });


  it("zipLists  if the length not equal", () => {
    let newList = new LinkedList();
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    list1.append(7);
    list1.append(9);
    let list2 = new LinkedList();
    list2.append(2);
    list2.append(4);
    list2.append(6);
    expect(newList.zipLists(list1, list2).toString()).toEqual(
      "{1}-->{2}-->{3}-->{4}-->{5}-->{6}-->{7}-->{9}-->null"
    );
  });


  it('toString()',()=>{
    let newList=new LinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    
    expect(newList.toString()).toEqual('{1}-->{2}-->{3}-->null');
});



});
