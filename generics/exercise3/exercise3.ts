{
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

  // Function calls
  const regularEmployeeBonus = bonusRate(employee);
  const managerBonus = bonusRate<Manager>(manager);
  const internBonus = bonusRate<Intern>(intern);

  console.log("Regular Employee Bonus:", regularEmployeeBonus);
  console.log("Manager Bonus:", managerBonus);
  console.log("Intern Bonus:", internBonus);
}
