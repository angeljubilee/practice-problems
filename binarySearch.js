let binarySearch = function (a, key) {
  //TODO: Write - Your - Code

  // Get midpoint of a
  // If key equals midpoint, return index
  // If key is > midpoint, search the right half
  // If Key is < midpoint, search left half

  let i = 0;
  let j = a.length - 1;

  while (i < j) {
    let mid = Math.floor((i + j) / 2);
    console.log(a[mid]);
    if (a[mid] === key) {
      return mid;
    }
    if (a[mid] > key) {
      j = mid - 1;
    }
    if (a[mid] < key) {
      i = mid + 1;
    }
    if (mid === 0) {
      break;
    }
    console.log(i, j);
  }

  if(a[i] === key) {
    return(i);
  }

  return -1;
};

console.log(binarySearch([1, 3, 5], 5));
