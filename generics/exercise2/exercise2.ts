class Person {
    constructor(public name: string) {}
  }

class EmployeeManagement {
    //implement the logic for the method to add employee to a list 
    addEmployee(): void {
    }
   //implement the logic for the method to list or display the list of employee 
    listEmployees(): void {
    }
}

class Employee extends Person {
    constructor(name: string, public position: string,departmentId:number) {
      super(name);
    }
  }


  /*
   const admin = new EmployeeManagement<Employee>();
   admin.addEmployee({name:'Jack',position:'Designer',departmentId:10})
   admin.listEmployees();
*/