

// Employee Types
type FullTimeCompensation = {
    monthlySalary: number;
};

type ContractCompensation = {
    hourlyRate: number;
    hoursWorked: number;
};

type FreelanceCompensation = {
    projectRate: number;
    projectsCompleted: number;
};


const fullTimeEmployee = {
    id: 1,
    name: "John Doe",
    compensation: { monthlySalary: 5000 }
};


const contractEmployee = {
    id: 1,
    name: "John Doe",
    compensation: { hourlyRate: 5000, hoursWorked:40 }
};

const freelanceeEmployee = {
    id: 3,
    name: "John Wick",
    compensation: {
        projectRate: 0,
        projectDuration: 0
    }
}

/*  1.1 Hint:  Generic Employee Type */