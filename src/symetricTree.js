/**
 * Definition for a binary tree node
 * function TreeNode(val, left, right){
 * this.val=(val==undefined?0:val)
 * this.left=(left===undefined?null:left)
 * this.right=(right===undefined?null:right)
 * }
 */

const isSymmetric = function(root){
    if(!root) return true;
    return traverse(root.left, root.right);

};

function traverse(node1,node2){
    if(!node1 && !node2) return true;

    if(!node1 || !node2) return false

    if(node1.val !== node2.val) return false;

    return traverse(node1.left, node2.right) && treverse(node1.right,node2.left)

}

console.log(isSymmetric(tree));