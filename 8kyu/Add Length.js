// DESCRIPTION:
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// my code

function addLength(str) {
//start-here
str = str.split(' ')
  
  for(i=0; i<str.length; i++){
    str[i] = str[i] + " " + str[i].length
   }
  
  return str
}
