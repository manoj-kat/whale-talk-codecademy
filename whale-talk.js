let input="a whale of a deal";
input="Hi, Human";
const vowels=['a', 'e', 'i', 'o', 'u'];
let resultArray=[];
//above declaration are global variables
for (let i=0; i<input.length; i++ ){
  console.log('i is'+ i);
  //iterating through each element of input variable
  for(let j=0; j<vowels.length; j++){
    console.log('j is'+ j);
    //iterating through the array and comparing to the input loop
    if(input[i]===vowels[j]){
      resultArray.push(input[i]);
      //if the input elements matchs the vowels seperating and pushing to the resultArray
      if(input[i]==='e' || input[i]==='u'){
        resultArray.push(input[i]);
      }
    }
    
    //console.log(vowels[i]);
    //if(input[i]===vowels[j]){
      
    //}
    
    }
}
console.log(resultArray.join('').toUpperCase());
