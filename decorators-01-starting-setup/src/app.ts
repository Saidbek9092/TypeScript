// function Logger(constructor: Function) { // this is decorator function
//   console.log('Logging...')
//   console.log(constructor)
// }

// function Logger(text: string){ // Another way to applying decorator with argument passing
//   console.log('Logging factory ...')
//   return function(constructor: Function){
//     console.log(text)
//     console.log(constructor)
//   }
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log('Template Factory')
//   return function<T extends {new(... args: any[]): {name: string}}>(originalconstructor: T){
//     return class extends originalconstructor {
//       constructor(... _: any[]){
//         super();
//         const hookEL = document.getElementById(hookId);
//         if (hookEL)
//         {
//           hookEL.innerHTML = template;
//           hookEL.querySelector('h1')!.textContent = this.name
//         }
//       }
//     }
//   }
// }

// @WithTemplate('<h1> My person object </h1>','app')
// class Person {
//   name = 'Max';
//   constructor(){
//     console.log('Creating person object ...');
//   }
// }

// const pers = new Person();
// console.log(pers);

// -----------

// function Log(target: any, propertyName: string | Symbol) { // adding decorator to property
//   console.log('Property Decorator');
//   console.log(target);
//   console.log(propertyName);
// }
// function Log2(target: any, name: string, desriptor: PropertyDescriptor) { // adding decorator to accessors
//   console.log('Accessor Decorator');
//   console.log(target);
//   console.log(name);
//   console.log(desriptor);
// }

// function Log3(target: any, name: string | Symbol, desriptor: PropertyDescriptor) { // adding decorator to methods
//   console.log('Method Decorator');
//   console.log(target);
//   console.log(name);
//   console.log(desriptor);
// }

// function Log4(target: any, name: string | Symbol, postion: number){
//   console.log('Parameter Decorator');
//   console.log(target);
//   console.log(name);
//   console.log(postion);
// }

// // // here Log prints out 2
// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   @Log2
//   set price(val: number) { // name: price
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error ('Invalid price  - should be positive!');
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }
//   @Log3
//   getpriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// --- Autobind example
// function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
//   console.log(descriptor)
//   const originalMethod = descriptor.value;
//   const adjustedDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMethod.bind(this);
//       return boundFn;
//     },
//   };
//   return adjustedDescriptor; // this will replace showMessage()
// }
// class Printer {
//   message = 'This works!';
//   @Autobind
//   showMessage() { 
//     console.log(this.message);
//   }
// }
// const p = new Printer();
// const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage.bind(p));
// if we do not put bind(p) this will be referred to add eventlisteneer which will be undefined. 


// --Valiations of decorators







class Course {
  title: string;
  price: number;

  constructor(t: string, p: number){
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleEl = document.getElementById('title')! as HTMLInputElement;
  const priceEl = document.getElementById('price')! as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  if (title.trim().length > 0 && price > 0){
    const createdCourse = new Course(title, price);
    console.log(createdCourse);
  } else{
    throw new Error('Incorrect data');
  }



})
