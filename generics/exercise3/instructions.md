# typescript-advanced-handons-generics-exercise3

**Instructions:**

## Exercise Description:

## Write a function to calculate bonuses for employees, defaulting the employee type to a generic Employee if no type is provided.

## We have 3 types of roles in the company : Manager,Regular employee and Interns

1. If the employee is an Intern, the bonus rate should be 5% of their salary.
2. If the employee is an regular employee , the bonus rate should be employee.salary \* 0.1;
3. If the employee is an regular Manager , the bonus rate should be manager.salary _ 0.15 + manager.teamSize _ 1000
4. If no type parameter is provided, the function assumes the Employee type

## HINT

*##*Type Narrowing:
*##*Use type guards ('property' in object) to differentiate between types within a generic function.\*\*

### Learning Objectives:

1. Understand generic constraints with class inheritance
2. Practice type-safe operations with generics
3. Implement role-specific functionality while maintaining code reusability

### Base Structure:

```typescript
interface Employee {
  id: number;
  name: string;
  salary: number;
}

interface Manager extends Employee {
  teamSize: number;
}

interface Intern extends Employee {
  school: string;
}
```

```typescript
// Instances
const employee: Employee = {
  id: 1,
  name: "John",
  salary: 50000,
};

const manager: Manager = {
  id: 2,
  name: "Jack",
  salary: 60000,
  teamSize: 10,
};

const intern: Intern = {
  id: 3,
  name: "Jane",
  salary: 20000,
  school: "Tech University",
};
```

```typescript
// Function calls
const regularEmployeeBonus = bonusRate(employee);
const managerBonus = bonusRate<Manager>(manager);
const internBonus = bonusRate<Intern>(intern);

console.log("Regular Employee Bonus:", regularEmployeeBonus);
console.log("Manager Bonus:", managerBonus);
console.log("Intern Bonus:", internBonus);
```
