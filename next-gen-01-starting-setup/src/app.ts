const add = (...numbers: number[]) => {
  return numbers.reduce((cureResult, curValue) => {
    return cureResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 3, 4, 5, 6);
console.log(addedNumbers);
const hobbies = ['driving', 'reading','swimming','walking']
const [h1, h2, ... remaining] = hobbies;
console.log(h1)
console.log(h2)

const person = {
  name: 'Saidbek',
  age: 20
}


const { age } = person;

console.log(person)
