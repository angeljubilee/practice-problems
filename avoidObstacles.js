/*
  let ans = []
  for num in array
    add num + 1 to ans
    if num is in ans, eliminate num from ans
    if num is divisible by ans, eliminate from ans
  return min ans - 1
*/

function avoidObstacles(array) {
  let map = {};
  map[array[0] + 1] = array[0] + 1;
  for (let i = 1; i < array.length; i++) {
    for (let key in map) {
      if ((array[i] % map[key]) === 0) {
        delete map[key];
      } else {
        map[array[i] + 1] = array[i] + 1;
      }
    }
  }
  let min = Infinity;
  for (let key in map) {
    if (parseInt(key) < min) {
      min = parseInt(key);
    }
  }
  return min - 1;
}

console.log(avoidObstacles([5, 3, 6, 7 , 9, 16]));
