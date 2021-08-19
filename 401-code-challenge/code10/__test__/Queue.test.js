"use strict";

let Queue = require("../Queue");


describe("Queue", () => {
    it("Can successfully enqueue into a queue", () => {
        let newQueue = new Queue();
        newQueue.enqueue(3);
        expect(newQueue.front.value).toEqual(3);
      });
      it("Can successfully enqueue multiple values into a queue", () => {
        let newQueue = new Queue();
        newQueue.enqueue(5);
        newQueue.enqueue(6);
        expect(newQueue.front.value).toEqual(5);
        expect(newQueue.front.next.value).toEqual(6);
      });
      it("Can successfully dequeue out of a queue the expected value", () => {
        let newQueue = new Queue();
        newQueue.enqueue(3);
        newQueue.enqueue(4);
        newQueue.dequeue();
        expect(newQueue.front.value).toEqual(4);
      });
      it("Can successfully peek into a queue, seeing the expected value", () => {
        let newQueue = new Queue();
        newQueue.enqueue(1);
        newQueue.enqueue(2);
        newQueue.peek();
        expect(newQueue.front.value).toEqual(1);
      });
      it("Can successfully empty a queue after multiple dequeues", () => {
        let newQueue = new Queue();
        newQueue.enqueue(5);
        newQueue.enqueue(6);
        newQueue.dequeue();
        newQueue.dequeue();
        expect(newQueue.front).toBeNull();
      });
      it("Can successfully instantiate an empty queue", () => {
        let newQueue = new Queue();
        expect(newQueue.front).toBeNull();
      });
      it("Calling dequeue or peek on empty queue raises exception", () => {
        let newQueue = new Queue();
        expect((newQueue.dequeue())).toEqual('Queue is empty');
      });

      it("isEmpty ", () => {
        let newQueue = new Queue();
        
        expect((newQueue.isEmpty())).toEqual(true)
        newQueue.enqueue(1)
        expect((newQueue.isEmpty())).toEqual(false)
      });

});