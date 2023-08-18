// DESCRIPTION:
// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):


// my solution

function reverseWords(str){
let spilitedArray = str.split(' ')
    spilitedArray.reverse()

 return spilitedArray.join(' ')
  // reverse those words
  
}
