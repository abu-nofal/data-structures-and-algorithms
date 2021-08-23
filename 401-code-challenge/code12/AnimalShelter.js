const Queue = require("./Queue");

class AnimalShelter{
    constructor(){
        this.dog=new Queue();
        this.cat=new Queue();
        

    }

    enqueue(anmile){
        if(anmile.type==='dog'){
            this.dog.enqueue(anmile.name)

        }
        else if(anmile.type==='cat')
        {
            this.cat.enqueue(anmile.name)
        }
        else return -1
        
    }

    dequeue(pref){
        if(pref==='dog'){
            return  this.dog.dequeue(pref)
             
        }else if(pref==='cat'){
            return  this.cat.dequeue(pref)
             
        }
        else return null 
    }
    
}

// let a1=new AnimalShelter()
// a1.enqueue({
//     type:'cat',
//     name:'soso'
// })
// a1.enqueue({
//     type:'cat',
//     name:'bebe'
// })

// a1.enqueue({
//     type:'dog',
//     name:'hiske'
// })


// console.log(a1.dequeue('cat'))

module.exports=AnimalShelter