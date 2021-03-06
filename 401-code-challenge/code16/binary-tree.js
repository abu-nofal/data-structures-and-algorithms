'use strict';

const Node=require('./node')
const levelOrder=require('../code17/breadthFirst')
class BinaryTree {
    constructor(root=null) {
        this.root = root;
    }

    // root - left - right
    preOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    // left - root - right
    inOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    // left  - right - root
    postOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }

    findMaxim(){
        if(!this.root){
            return 'no binary tree';
        }
        let result = this.root.value;
        let findMax=(node)=>{
            if (node == null)
            return 'no binary tree';
       result=node.value
        let leftresult = findMax(node.left);
        let rightresult = findMax(node.right);
   
        if (leftresult > result)
        result = leftresult;
        if (rightresult > result)
        leftresult = rightresult;
        return result;
    }
    findMax(this.root)
    return result
}
 


}
// let fizzBuzz = (tree) => {
//     let current = tree.root;
//     let result = [];
//     if (!current) return -1;
//     let trevers = (node) => {
//       if (node.value % 3 == 0 && node.value % 5 == 0) {
//         node.value = "fizzBuzz";
//         result.push(node.value);
//       } else if (node.value % 3 == 0) {
//         node.value = "fizz";
//         result.push(node.value);
//       } else if ((node.value & 5) == 0) {
//         node.value = "buzz";
//         result.push(node.value);
//       } else {
//         result.push(node.value.toString());
//       }
  
//       if (node.left) trevers(node.left);
//       if (node.right) trevers(node.right);
//     };
//     trevers(current);
//     return result;
//   };





// let one = new Node(1);
//         let two = new Node(2);
//         let three = new Node(3);
//         let four = new Node(4);
//         let five = new Node(5);
//         let six = new Node(6);
//         let seven = new Node(7);
//         let eight = new Node(15);
//         let nine = new Node(9);

//         one.left = two;
//         one.right = three;
//         two.left = six;
//         six.right = seven;
//         seven.left = eight;
//         seven.right = nine;
//         three.left = four;
//         three.right = five;

//        let tree = new BinaryTree(one);

// console.log(tree);
// console.log(levelOrder(tree));
// console.log(fizzBuzz(tree));

module.exports = BinaryTree;

