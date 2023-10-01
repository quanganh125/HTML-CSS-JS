function findIndex (arr, target) {
  if (arr.length == 0) return -1;

  var low = 0;
  var high = arr.length - 1;

  while (low <= high) {
    var mid = Math.floor((high + low) / 2);

    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid -1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

console.log(findIndex([1, 2, 5, 6, 7, 1121, 1133, 3333], 7))
