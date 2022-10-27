INSERT INTO departments (deptName)
VALUES  ("Finance"),
        ("Sales"),
        ("Engineering"),
        ("Legal"),
        ("Support");

INSERT INTO roles (title, salary, departmentId)
VALUES  ("Salesperson", 80000, 2),
        ("Sales Lead", 100000, 2),
        ("Software Engineer", 125000, 3),
        ("Lead Engineer", 150000, 3),
        ("General Counsel", 225000, 4),
        ("Legal Clerk", 125000, 4),
        ("Financial Analyst", 100000, 1),
        ("Accountant", 60000, 1),
        ("Finance Manager", 125000, 1),
        ("Technical Support", 50000, 5),
        ("Support Lead", 65000, 5);

INSERT INTO employees (firstName, lastName, roleId, managerId)
VALUES  ("Mike", "Chan", 2, null),
        ("John", "Doe", 1, 1),
        ("Kevin", "Tupik", 4, null),
        ("Ashley", "Rodriguez", 3, 3),
        ("Kunal", "Singh", 5, null),
        ("Malia", "Brown", 6, 5),
        ("Gabriel", "Iglesias", 9, null),
        ("Sarah", "Lourd", 7, 7),
        ("Tom", "Allen", 8, 7),
        ("Miya", "Kaur", 11, null),
        ("Chester", "Bennington", 10, 10),
        ("Mandy", "Jones", 1, 1),
        ("Samuel", "Jackson", 3, 3),
        ("Ryan", "Reynolds", 6, 5),
        ("Joe", "Somebody", 10, 10);