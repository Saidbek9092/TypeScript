// Code goes here!
class Department {
  static fiscalyear = 2020;
  public name: string;
  protected readonly id: string;
  employees: string[] = [];

  constructor(id: string, n: string) {
    this.name = n;
    this.id = id;
    console.log(Department.fiscalyear)
  }
  
  static createEmployee(name:string) {
    return {name:name};
}

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printInformationsEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
  // const employee1 = new Department('p1','Saidbek')
  // console.log(employee1)


class Accounting extends Department {
  private lastReport: string;
  private static instance: Accounting;
  get mostrecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static gentinstance () {
    if (Accounting.instance){
      return Accounting.instance
    } else{
      this.instance = new Accounting('d2',[]);
      return this.instance;
    }
  }

  addResport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  describe() {
    console.log('My name is saidbek ' + this.id)
  }
}

// const accounting = new Accounting('p1', []);
const accounting = Accounting.gentinstance()
accounting.describe();

// const accounting2 = Accounting.gentinstance()

// const accounting2 = Accounting.gentinstance()
// console.log(accounting,accounting2)

// accounting.addResport('Something gone wrong ...');
// accounting.describe();
// console.log(accounting.mostrecentReport)
// console.log(accounting);
// const accounting = new Department('user1','Accouting');
// console.log(accounting);

// accounting.addEmployee('Saidbek')
// accounting.addEmployee('Ulugbek')

// accounting.describe()
// accounting.printInformationsEmployees();
