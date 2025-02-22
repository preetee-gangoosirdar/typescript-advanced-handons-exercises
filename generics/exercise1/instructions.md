# typescript-advanced-handons-generics-exercise1

**Instructions:**

**Develop a flexible payroll management system that can handle different types of employees and compensation calculations.**

Exercise Description: Create a generic type-based payroll system that supports:

1. Different employee types
        **Full-time (monthly salary)**
        **Contract (hourly rate)**
        **Freelance (project-based)**

2. Create Flexible payroll management function that will calculate where for payroll for each of these different employee types
**Full-time (monthly salary)** 
```typescript
        {
            grossSalaryCalculator: (employee) => employee.compensation.monthlySalary,
            taxCalculator: (grossSalary) => grossSalary * 0.25  // 25% tax rate
        }
```
**Contract (hourly rate)** 
 ```typescript
         {
            grossSalaryCalculator: (employee) => employee.compensation.hourlyRate * employee.compensation.hoursWorked,
            taxCalculator: (grossSalary) => grossSalary * 0.20  // 20% tax rate
         }
```
**Freelance (project-based)**
```typescript 
         {
          grossSalaryCalculator: (employee) => employee.compensation.projectRate * employee.compensation.projectsCompleted,
          taxCalculator: (grossSalary) => grossSalary * 0.30  // 30% tax rate
         }
```      
    
2.1. Based on these grossSalaryCalculator and taxCalculator, Each employee should hold the following data as payroll information** 
```typescript 
          {
               grossSalary,
               netSalary: grossSalary - taxAmount
          }
``` 
3. Ensure your implementation should support this kind of type-safe usage
```typescript
    const fullTimeEmployee: Employee<number> = { /* ... */ };
    const contractEmployee: Employee<{ hourlyRate: number, hoursWorked: number }> = { /* ... */ };
``` 