function chunkArrayInGroups(arr, size) {

  let newArr=[]

  while(arr.length != 0){
    newArr.push(arr.slice(0,size));
    arr.splice(0,size);
  }



  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);