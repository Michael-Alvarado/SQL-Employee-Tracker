INSERT INTO department (dept_name)
VALUES  ("Finance"),
        ("Sales"),
        ("Engineering"),
        ("Legal"),
        ("Support");

INSERT INTO emp_role (title, salary, department_id)
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

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("")