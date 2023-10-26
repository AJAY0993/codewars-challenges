// DESCRIPTION:
// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

var filterString = function(value) {
  //Complete this function :)
  let arr = value.split('')
  
  return Number(   (    arr.map((x) => {
    if(Number(x)){
       return x
       } 
  else if(x === '0' )
  {
    return Number(x)
  }} )       
                   ).join(''))
}
