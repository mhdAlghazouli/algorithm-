// return how many duplicate letters are in the array

let letters = (array) => {

  let counter = [];
  
  for(let i = 0 ; i < array.length; i++){

    if(!counter.includes(array[i])){

      counter.push(array[i])

    }

  }

  return (array.length - counter.length)


}

console.log(letters(["a","b","b","b","c","d"]))//2
console.log(letters(['a','b','b','c','d']))//1
console.log(letters(['a','a','b','b','c','d']))//2