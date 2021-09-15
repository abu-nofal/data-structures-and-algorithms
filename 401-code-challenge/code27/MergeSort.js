'use strict'
function Mergesort(arr) {
    let n = arr.length

    if (n < 2) return arr
        let mid = Math.floor(n / 2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid)


       
        
    return Merge( Mergesort(left),Mergesort(right),arr);
     
    
}

function Merge(left, right, arr) {
    let i = 0
    let j = 0
    let k = 0

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i]
            i++
        }

        else {
            arr[k] = right[j]
            j++
        }
        k++
    }
   while(i < left.length){
    arr[k] = left[i]
    i++
    k++
   }
   while(j < right.length){
    arr[k] = right[j]
    j++
    k++
   }
  return arr
}
let arr=[5,9,7,1,20,15,6]

console.log(Mergesort(arr));
module.exports=Mergesort