'use strict'

const Node=require('./node')

class BinarySearch{
    constructor(root=null){
        this.root=root
    }



    add(value) {
        let node = new Node(value);
        if(!this.root){
            this.root=node;
            return
        }
        let current=this.root
        while(current){
            if(current.value>node.value){
                if(!current.left){
                    current.left=node
                    return;
                }
                else{
                    current=current.left
                }
            }else{

                if(!current.right){
                    current.right=node
                    return;
                }
                else{
                    current=current.right
                }
            }
        }
        return this.root
      }

      Contains(value){
          if(!this.root){
              return 'there is no binary search tree'
          }
          let current=this.root
         while(current){
             if(value==current.value){
                 return true
             }
            else if(value>current.value){
                 current=current.right
                 
             }
             else{
                 current=current.left
                
             }
         }
         return false
      }
}

// let bina=new BinarySearch()

// bina.add(5)
// bina.add(3)
// bina.add(1)
// bina.add(7)
// bina.add(4)
// bina.add(6)




// console.log(bina);
// console.log(bina.Contains(1));
module.exports=BinarySearch