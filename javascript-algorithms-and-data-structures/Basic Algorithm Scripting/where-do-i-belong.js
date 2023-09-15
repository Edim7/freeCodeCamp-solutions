function getIndexToIns(arr, num) {

  arr = arr.sort(function(a, b){return a - b});
  console.log(arr);

  for(let i=0; i<=arr.length-2; i++){
    if(num === arr[i]) return i;
    if(num > arr[i] && num<=arr[i+1]) return i+1
    if(num > arr[i] && i===arr.length-2) return arr.length;
  }

  return 0;
  
}
console.log(getIndexToIns([2,5,10], 15))
//getIndexToIns([40, 60], 50);