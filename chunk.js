/*
Examples
chunk([1, 2, 3, 4], 2) // --> [[1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) // --> [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) // --> [[1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) // --> [[1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) // --> [1, 2, 3, 4, 5]
*/
// let i = 0
// let ans = [];
// while (i < length)
//   for (i to num)
//     make subarray of those elements
// return ans


function chunk(a, num) {
  let a_position = 0;
  const ans = [];

  for (let i = 0; i < a.length; i+=num) {
    const sub = [];
    for (let j = a_position; j < a_position + num; j++) {
      if (j > a.length - 1) {
        break;
      }
      sub.push(a[j]);
    }
    ans.push(sub);
  }
  return ans;
}

console.log(chunk([1, 2, 3, 4, 5], 10));
