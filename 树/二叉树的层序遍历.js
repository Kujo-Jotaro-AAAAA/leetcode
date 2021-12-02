
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
const arrToTreeNode = (arr) => {
  let root = fn(arr, 0);
  return root;
};
const fn = (arr, start) => {
  if (start >= arr.length) {
    return null;
  }
  if (arr[start] == "null") {
    return null;
  }
  let root = new TreeNode(arr[start]);
  root.left = fn(arr, start * 2 + 1);
  root.right = fn(arr, start * 2 + 2);
  return root;
};
const treenode = arrToTreeNode([3,9,20,null,null,15,7])

var preorderTraversal = function(root) {
    const arr = [];
    preOrder(root, arr);
    return arr;
};

function preOrder(node, arr){
    if(node === null) return;
    arr.push(node.val);
    preOrder(node.left, arr);
    preOrder(node.right, arr);
}

var levelOrder = function(root) {
    //二叉树的层序遍历
    let res=[],queue=[];
    queue.push(root);
    if(root===null){
        return res;
    }
    while(queue.length!==0){
        // 记录当前层级节点数
        let length=queue.length;
        //存放每一层的节点 
        let curLevel=[];
        for(let i=0;i<length;i++){
            console.log({queue})
            debugger
            let node=queue.shift();
            curLevel.push(node.val);
            // 存放当前层下一层的节点
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
        //把每一层的结果放到结果数组
        res.push(curLevel);
    }
    return res;
};

console.log('res ==> ',treenode, '=>',levelOrder(treenode))


