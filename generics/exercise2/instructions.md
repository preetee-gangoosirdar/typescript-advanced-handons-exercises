# typescript-advanced-handons-generics-exercise2

**Instructions:**


## Exercise Description: 
Build an organization management system that demonstrates the power of generic constraints by managing different types of employees with varying roles and attributes.

### Learning Objectives:

1. Understand generic constraints with class inheritance
2. Practice type-safe operations with generics
3. Implement role-specific functionality while maintaining code reusability


### Base Structure:
```typescript

class Person {
    constructor(public name: string) {}
  }

class EmployeeManagement {
    //implement the logic for the method to add employee to a list 
    addEmployee(): void {
       ...
    }
   //implement the logic for the method to list or display the list of employee 
    listEmployees(): void {
       ....
    }
}

class Employee extends Person {
    constructor(name: string, public position: string;departmentId:number) {
      super(name);
    }
  }



```
### Base Structure: Usage + Hint
```typescript
   const admin = new EmployeeManagement<Employee>();
   admin.addEmployee({name:'Jack',position:'Designer',departmentId:10})
   admin.listEmployees();