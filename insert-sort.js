var numbers = [4, 1, 2, 3, 2, 6, 2, 8, 5];

var insert_sort = function(arr) {
  for(var j = 1; j <= arr.length - 1; j++) {
    var key = arr[j];
    var q = j - 1;
    while(q >= 0 && arr[q] > key) {
      arr[q + 1] = arr[q];
      q--;
    }
    arr[q + 1] = key;
  }
  return arr;
};

console.log(insert_sort(numbers));
console.log(numbers);