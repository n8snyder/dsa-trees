/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    if (node === null) return 0;

    const leftDepth = this.minDepth(node.left);
    const rightDepth = this.minDepth(node.right);

    return rightDepth < leftDepth ? 1 + rightDepth : 1 + leftDepth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    if (node === null) return 0;

    const leftDepth = this.maxDepth(node.left);
    const rightDepth = this.maxDepth(node.right);

    return rightDepth > leftDepth ? 1 + rightDepth : 1 + leftDepth;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root) {
    if (node === null) return null;

    const nodeLarger = node.val > lowerBound ? node.val : null;
    const leftLarger = this.nextLarger(lowerBound, node.left);
    const rightLarger = this.nextLarger(lowerBound, node.right);

    let smallest = Infinity;
    if (nodeLarger !== null && nodeLarger < smallest) smallest = nodeLarger;
    if (leftLarger !== null && leftLarger < smallest) smallest = leftLarger;
    if (rightLarger !== null && rightLarger < smallest) smallest = rightLarger;
    if (nodeLarger === null && leftLarger === null && rightLarger === null) {
      smallest = null;
    }
    
    return smallest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

}

module.exports = { BinaryTree, BinaryTreeNode };
