function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}
// let number1;
// number1 = "0"
const number1: number = 9;
const number2 = 2.8;

const printResult = true;
let resultPhrase = 'Resut is: '

const result = add(number1, number2, printResult, resultPhrase);