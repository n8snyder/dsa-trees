/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root === null) return 0;

    const unvisited = [this.root];
    let total = 0;

    while (unvisited.length !== 0) {
      let node = unvisited.pop();
      total += node.val;

      for (let child of node.children) {
        unvisited.push(child);
      }
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root === null) return 0;

    const unvisited = [this.root];
    let total = 0;

    while (unvisited.length !== 0) {
      let node = unvisited.pop();
      
      if (node.val % 2 === 0) {
        total++;
      }

      for (let child of node.children) {
        unvisited.push(child);
      }
    }
    return total;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root === null) return 0;

    const unvisited = [this.root];
    let total = 0;

    while (unvisited.length !== 0) {
      let node = unvisited.pop();
      
      if (node.val > lowerBound) {
        total++;
      }

      for (let child of node.children) {
        unvisited.push(child);
      }
    }
    return total;
  }
}

module.exports = { Tree, TreeNode };
