function binaryTree(tree) {
  let root = null;
  const createNode = (key) => {
    //生成一个新的子树
    let _obj = Object.create(null, {});
    _obj.key = key;
    _obj.left = null;
    _obj.right = null;
    return _obj;
  };
  const insert = (key) => {
    //添加一个新子树
    let newNode = createNode(key);
    let _insertNode = (node, newNode) => {
      //判断新二叉树的值和原有节点的值
      if (newNode.key < node.key) {
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
