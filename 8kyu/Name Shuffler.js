//my code

function nameShuffler(str){
  //Shuffle It
  let arr = str.split(' ')
   let fName = arr[0]
   let sName = arr[1]
   
   arr[0] = sName
   arr[1] = fName
  
  return arr.join(' ')
}
