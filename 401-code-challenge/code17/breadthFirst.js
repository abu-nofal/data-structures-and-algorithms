'use strict'
let breadthFirst=(tree)=>{
    if(!tree.root) return -1 

    let queu=[]
    let result =[]

    let current =tree.root
    queu.push(current)
    while(queu.length>0){
        current =queu.shift()
        result.push(current.value)
        if(current.left) queu.push(current.left)
        if(current.right) queu.push(current.right)
    }
    return result
}
module.exports=breadthFirst;


