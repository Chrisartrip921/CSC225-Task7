// //Question 
function reverseThisString(string){
  let temp = ' ';
  for(let i = string.length; i >= 0; i--){
    temp += string[i];
    
  }
  console.log(temp);
}
console.log(reverseThisString('Hello'));

//Question 2
function swapCase(string) {
  let newString ='';
  
  for(let i = 0; i < string.length; i++){
    if(string[i] >= 'A' && string[i] <= 'Z'){
      newString += string[i].toLowerCase();
  } else if(string[i] >= 'a' && string[i] <= 'z'){
      newString += string[i].toUpperCase();
  }

}
console.log(newString);
}
swapCase('hElLo');

//Question 3
const temp = [100, 120, 140, 100];
function toCelcius(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${array[i]} converted to celcius is ${((array[i] - 30) / 2)}`)
  }
}
toCelcius(temp);

//Question 4
const grades = [65, 70, 75, 85];
function passOrFail(array) {
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 75) {
      temp[i] = 'Pass';
      
    } else {
      temp[i] = 'Fail';
      
    }
  }
  return temp;
}
console.log(passOrFail(grades));

//Question 5
function germanNumbers() {
  const cardinalNumbers = [2, 3, 4, 5, 6];
  const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
  //Check to see that both arrays are of equal size:
  let conversion = [];
  if (cardinalNumbers.length - germanNumbers.length === 0) {
    for (let i = 0; i < 5; i++) {
      conversion[i] = `${cardinalNumbers[i]}  is  ${germanNumbers[i]}`;
    }
  }
  console.log(conversion);
}
germanNumbers();

//Question 6
function returnPrimeNumbers(){
  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  const prime = [];
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] <= 1){
      const value = false;
    } else if(i % numbers[i] === 0){
      prime[i] = numbers[i];
    }
  }
  return prime;
}
returnPrimeNumbers();

//Question 7
function csc225Rules(){ 
  for(let i = 0; i <= 100; i++){
    if(i%3 === 0){
      console.log('CSC225 RULES');
    } else if(i%5 === 0){
      console.log('I LOVE JAVASCRIPT');
    } else if(i%3 === 0 && i/5 === 0){
      console.log('CSC225 RULES I LOVE JAVASCRIPT')
    } else{
      console.log(i);
    }
  }
}
console.log(csc225Rules());