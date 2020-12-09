// Code goes here!

// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// type ElevatedEmployess = Admin & Employee;

// const e1: ElevatedEmployess = {
//   name: 'Saidbek',
//   privileges: ['create-server'],
//   startDate: new Date()
// }

// type UnknownEmployess = Employee | Admin;

// function printEmployessInformation(emp: UnknownEmployess){
//   console.log('Name: ' + emp.name);
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges)
//   }
//   if ('startDate' in emp) {
//     console.log('Date: ' + emp.startDate);

//   }
// }

// printEmployessInformation(e1)

// class Car {
//   drive() {
//     console.log('Car driving ...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Truck driving ...');
//   }

//   loadCargo(amount: number) {
//     console.log('Loaded amount is ' + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if ('loadCargo' in vehicle) {
//     vehicle.loadCargo(999)
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: 'bird';
//   flyingspeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningspeed: number;
// }
// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingspeed;
//       break;
//     case 'horse':
//       speed = animal.runningspeed;
//       break;
//   }
//   console.log(speed);
// }

// moveAnimal({type: 'bird', flyingspeed: 50})
