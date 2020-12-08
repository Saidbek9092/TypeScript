function combined(
  input1: number | string,
  input2: number | string,
  resultCOnversion: 'as-text' | 'as-number'
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultCOnversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;

}

type User = { name: string; age:number };
const u1:User = {name: 'Max', age: 30};
console.log(u1);



// const combinedadges = combined(30, 55, 'as-number');
// console.log(combinedadges);

// const combinedStringadges = combined('30', '55', 'as-number');
// console.log(combinedStringadges);

// const combinednames = combined('max', 'anna', 'as-text');
// console.log(combinednames);

