'use strict'

const DuckDuckGoose=require('../DuckDuckGoose')


describe("DuckDuckGoose ", () => {
    it(" DuckDuckGoose ", () => {
         let queue=['a','b','c','d','e']
         let k=5
        
        expect(DuckDuckGoose(queue,k)).toBe('b');
       
        
      });

     
    })