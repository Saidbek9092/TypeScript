
enum Role { ADMIN = 5, READ_ONY, AUTHOR };

const person = {
  name: 'Saidbek',
  age: 30,
  hobbies: ['sport', 'cooking'],
  role: Role.AUTHOR
};



if (person.role === Role.AUTHOR){
  console.log('is author')
}