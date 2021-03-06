function binaryTree(tree) {
  let root = null;
  const createNode = (val) => {
    //生成一个新的子树
    let _obj = Object.create(null, {});
    _obj.val = val;
    _obj.left = null;
    _obj.right = null;
    return _obj;
  };
  const insert = (val) => {
    //添加一个新子树
    let newNode = createNode(val);
    let _insertNode = (node, newNode) => {
      //判断新二叉树的值和原有节点的值
      if (newNode.val < node.val) {
        if (node.left === null) {
          //判断左节点是否为空
          node.left = newNode;
        } else {
          _insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          //判断右节点是否为空
          node.right = newNode;
        } else {
          _insertNode(node.right, newNode);
        }
      }
    };
    if (root === null) {
      //如果没有根节点，那么把传入的值当根节点
      root = newNode;
    } else {
      //如果有根节点，那么把传入的值插到二叉树上
      _insertNode(root, newNode);
    }
  };
  tree.forEach((key) => {
    //遍历数组，插入子树
    insert(key);
  });
  return root;
}
// ************************************ 生成tree **************************************
const treenode = binaryTree([3, 9, 20, null, null, 15, 7]);
var levelOrder = function (root) {
  //二叉树的层序遍历
  let res = [],
    queue = [];
  if (root === null) {
    return res;
  }
  queue.push(root);
  while (queue.length !== 0) {
    // 记录当前层级节点数
    let length = queue.length;
    //存放每一层的节点
    let curLevel = [];
    for (let i = 0; i < length; i++) {
      // console.log({ queue });
      // debugger;
      let node = queue.shift();
      curLevel.push(node.val);
      // 存放当前层下一层的节点
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    //把每一层的结果放到结果数组
    res.push(curLevel);
  }
  return res;
};

console.log("res ==> ", treenode, "=>", levelOrder(treenode));
