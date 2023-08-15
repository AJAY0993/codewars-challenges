//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//Note: input will never be an empty string

function fakeBin(x){
let binaryArr = x.split('').map(x => {
  if(x<5){return 0}
else{return 1}
} )

return binaryArr.join('')
}


//smaller solution

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
