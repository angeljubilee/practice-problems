var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  if (!root.left && !root.right) {
    return true;
  }

  let size;
  let queue = [];
  queue.push(root.left);
  queue.push(root.right);

  while (queue.length) {
    size = queue.length;
    if (queue.length === 1) {
      return true;
    }
    for (let i = 0; i < queue.length / 2; i++) {
      if (!queue[i] && !queue[queue.length - 1 - i]) {
        continue;
      }
      if (!queue[i] && queue[queue.length - 1 - i]) {
        return false;
      }
      if (queue[i] && !queue[queue.length - 1 - i]) {
        return false;
      }
      if (queue[i].val !== queue[queue.length - 1 - i].val) {
        return false;
      }
    }

    // Add sub nodes
    for (let i = 0; i < size; i++) {
      if (queue[i]) {
        queue.push(queue[i].left);
        queue.push(queue[i].right);
      }
    }

    // Remove current nodes
    for (let i = 0; i < size; i++) {
      queue.shift();
    }
  }
  return (true);

};
