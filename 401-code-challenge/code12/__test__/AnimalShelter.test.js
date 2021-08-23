"use strict";

let AnimalShelter = require("../AnimalShelter");

describe('AnimalShelter', ()=> {
    it('enque() cat ', ()=> {
       let animal=new AnimalShelter()
       animal.enqueue({
           type:'cat',
           name:'soso'
       })
       expect(animal instanceof AnimalShelter).toBe(true)
       expect(animal.cat.front.value).toEqual('soso')
       

    }) 
    it('deque()  cat ', ()=> {
        let animal=new AnimalShelter()
        animal.enqueue({
            type:'cat',
            name:'soso'
        })
        animal.enqueue({
            type:'cat',
            name:'bebo'
        })
        animal.dequeue('cat')

        expect(animal instanceof AnimalShelter).toBe(true)
        
        expect(animal.dequeue('cat')).toEqual('bebo')
        expect(animal.cat.front).toBe(null)
 
     }) 

     // dog 

     it('enque() dog ', ()=> {
        let animal=new AnimalShelter()
        animal.enqueue({
            type:'dog',
            name:'soso'
        })
        expect(animal instanceof AnimalShelter).toBe(true)
        expect(animal.dog.front.value).toEqual('soso')
        
 
     }) 

     it('deque()  dog ', ()=> {
        let animal=new AnimalShelter()
        animal.enqueue({
            type:'dog',
            name:'soso'
        })
        animal.enqueue({
            type:'dog',
            name:'bebo'
        })
        animal.dequeue('dog')

        expect(animal instanceof AnimalShelter).toBe(true)
        
        expect(animal.dequeue('dog')).toEqual('bebo')
        expect(animal.dog.front).toBe(null)
        expect(animal.dequeue('lion')).toBe(null)
        expect(animal.enqueue({
            type:'lion',
            name:'soso'
        })).toBe(-1)
       
 
     }) 
    

});