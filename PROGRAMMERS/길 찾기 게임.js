    
function solution (nodeinfo) {
  const preorderArr = [];
  const postorderArr = [];
  
  const nodes = nodeinfo.map((node, idx) => [ idx+1, node[0], node[1] ])
            .sort((a, b) => b[2] - a[2]);
  
  const bTree = new BinaryTree(nodes[0][0], nodes[0][1]);
  for(let i = 1; i < nodes.length; i++) {
    bTree.insert(nodes[i][0], nodes[i][1]);
  }
  
  preorder(bTree, preorderArr);
  postorder(bTree, postorderArr);
  
  return [preorderArr, postorderArr];
}
​
class BinaryTree {
  constructor(value, x_pos) {
    this.value = value;
    this.x_pos = x_pos;
    this.left = null;
    this.right = null;
  }
  
  insert(value, x_pos) {
    this.x_pos >= x_pos
        ? this._toLeft(value, x_pos)