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
VALUES  ("John", "Doe", 1, 2),
        ("Mike", "Chan", 2, ),
        ("Ashley", "Rodriguez", 3, 4),
        ("Kevin", "Tupik", 4, ),
        ("Kunal", "Singh", 5, ),
        ("Malia", "Brown", 6, 5),
        ("Sarah", "Lourd", 7, 9),
        ("Tom", "Allen", 8, 9),
        ("Gabriel", "Iglesias", 9, ),
        ("Chester", "Bennington", 10, 11),
        ("Miya", "Kaur", 11, ),
        ("Mandy", "Jones", 1, 2),
        ("Samuel", "Jackson", 3, 4),
        ("Ryan", "Reynolds", 6, 5),
        ("Joe", "Somebody", 10, 11);