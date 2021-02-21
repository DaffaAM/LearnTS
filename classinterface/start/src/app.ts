//class example

abstract class Department {
    // public id: string;
    // name: string;
    // if you want to access from inheritance use protected
  
    protected employees: string[] = [];
  
    constructor(protected readonly id:string,public name: string) {
      // this.name = n;
    //   this.id = id;
    } 

    //static method
    static createEmployee(name: string){
        return {name: name}
    }
    //abstract class, we can use this in inheritance
    abstract describe(this: Department): void
    
    addEmployee(employee: string){
      this.employees.push(employee);
    }
  
    printEmployeeInformation(){
      console.log(this.employees.length)
      console.log(this.employees)
    }
  }
  
  // inheritance
  class ITDepartment extends Department {

    constructor(id: string, public admin: string[]){
      super(id, 'IT');
      this.admin = admin;
    }

    describe(){
        console.log('IT Department:'+ this.id)
    }
  }
  
  class Accounting extends Department {
  
    private lastReport: string;
    //private constructor
    private static instance: Accounting;
    ///getter example
    get mostRecentReport(){
      return this.lastReport;
    }
  
    //setter example
    set mostRecentReport(value: string){
        if(!value){
            throw new Error("Please insert the value")
        }
        // this.lastReport = value;
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]){
      super(id, 'Reports')
      this.lastReport = reports[0];
    }
     
    //singleton
    static getInstance(){
        if(Accounting.instance){
            return this.instance
        }
        this.instance = new Accounting('D2', [])
        return this.instance;
    }

    describe(){
        console.log('Accounting :' + this.id)
    }
  
  
    // set mostRecentReport(value: string){
    //   if(!value){
    //     return;
    //   }
    //   return this.addEmployee(value)
    // }
  
    addEmployee(name: string){
      if(name === 'Daffa'){
        return;
      }
      this.employees.push(name)
    }
  
    addReport(text: string){
      this.reports.push(text)
      this.lastReport = text;
    }
  
    getReport(){
      console.log(this.reports)
    }
  }

  //properties from static method
  const employee1 = Department.createEmployee('Object?')
  console.log(employee1)
  
  const it = new ITDepartment("D1", ['Daffa', 'Anre']);
  it.addEmployee('Daffa')
  it.addEmployee('Udin')
  it.addEmployee('Awaw')
  
  it.printEmployeeInformation()
  it.describe()
  console.log(it);
  
  //constructor

  //singleton
  const act = Accounting.getInstance()
  console.log(act)
//   const act = new Accounting('D2', [])
  act.addEmployee('Karyawan baru')
  
  act.addReport('Sales is good')
  ///setter
  act.mostRecentReport = 'Sales is not good'

  act.mostRecentReport = 'Sales is fine'
  //getter
  console.log(act.mostRecentReport)



//   act.getReport();
  
//   act.printEmployeeInformation()
  // accounting.employees[3] = 'Dada'
  
  act.describe();
//   accounting.printEmployeeInformation();
  
  
  
  