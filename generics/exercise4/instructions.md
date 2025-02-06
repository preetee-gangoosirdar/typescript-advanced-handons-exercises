# typescript-advanced-handons-generics-exercise3

**Instructions:**

## Exercise Description:

## We have an employee object with keys like id, name, and salary. We want to prefix each key with emp_

### Learning Objectives:
1. Creating mapped types with generics


```typescript
type Employee = {
  id: number;
  name: string;
  salary: number;
};
```

## Usgage 

```typescript

const prefixEmployee = {
  emp_id: 1,
  emp_name: "John Doe",
  emp_salary: 50000,
};
```

## HINT
**keyof T : Retrieves all the keys of the object type T.**

**in: Iterates over each key in keyof T.**

**as: Dynamically renames each key using a template literal type**