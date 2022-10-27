import inquirer from 'inquirer';
import express from 'express';
import db from "./db/connection.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

            // '*View Employees by Manager',
            // '*View Employees by Department',
            // '*Remove Department',
            // '*Remove Employee',
            // '*Remove Role',
            // '*View Total Utilized Budget of Department',

const mainMenu = [
    {
        type: 'list',
        name: 'main',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role',
            'Update an Employee Manager',
            'End Session'
        ]
    }
];

function init() {
    inquirer.prompt(mainMenu).then(response => {
        switch (response.main) {
            case 'View All Departments':
                viewDepts();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'View All Employees':
                viewEmps();
                break;
            case 'Add a Department':
                addDept();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'Add an Employee':
                addEmp();
                break;
            case 'Update an Employee Role':
                updateRole();
                break;
            case 'Update an Employee Manager':
                updateMgr();
                break;
            case 'End Session':
                console.log('Session ended successfully!');
                break;
        }
    });
};

const viewDepts = () => {
    const sql = (`SELECT id, deptName FROM employee_db.departments`);
    db.query(sql, (err, rows) => {
        if(err) {
            return err;
        }
        console.table(rows);
        init();
    });
};

const viewRoles = () => {
    const sql = (`SELECT roles.title AS jobTitle, roles.salary, departments.deptName AS departmentName
                FROM roles
                JOIN departments
                ON roles.departmentId = departments.id`);
    db.query(sql, (err, rows) => {
        if(err) {
            return err;
        }
        console.table(rows);
        init();
    });
};

const viewEmps = () => {
    const sql = (`SELECT employees.id AS employeeId, 
                employees.firstName,
                employees.lastName,
                employees.managerId AS manager,
                departments.deptName AS departmentName,
                roles.title AS jobTitle,
                roles.salary
                FROM employees
                LEFT JOIN roles
                ON employees.roleId = roles.id
                INNER JOIN departments
                ON roles.departmentId = departments.id`);
    db.query(sql, (err, rows) => {
        if(err) {
            return err;
        }
        console.table(rows);
        init();
    });
};

const addDept = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'deptName',
            message: 'Enter the name of the department you would like to add:'
        }
    ]).then(({deptName}) => {
        const sql = `INSERT INTO departments (deptName) VALUES ('${deptName}')`;
        db.query(sql, (err, rows) => {
            if(err) {
                return err;
            }
            console.log(`${deptName} added to Departments`);
            init();
        });
    });
};

const addRole = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'title',
            message: 'Enter the job title:'
        },
        {
            type: 'text',
            name: 'deptId',
            message: 'Enter the Department ID:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary amount for the role:'
        }
    ]).then((responses) => {
        const sql = `INSERT INTO roles (title, salary, departmentId)
                    VALUES ('${responses.title}', '${responses.salary}', '${responses.deptId}')`;
        db.query(sql, (err, rows) => {
            if(err) {
                return err;
            }
            console.log(`${responses.title} added to Roles`);
            init();
        });
    });
};

const addEmp = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'firstName',
            message: "Enter the employee's first name:"
        },
        {
            type: 'text',
            name: 'lastName',
            message: "Enter the employee's last name:"
        },
        {
            type: 'input',
            name: 'roleId',
            message: "Enter the ID of the employee's role:"
        },
        {
            type: 'input',
            name: 'manager',
            message: "Enter the ID of the employee's manager:"
        }
    ]).then((responses) => {
        let sql = '';
        if(responses.manager === 'null') {
            sql = `INSERT INTO employees (firstName, lastName, roleId, managerId)
                    VALUES ('${responses.firstName}', '${responses.lastName}', '${responses.roleId}', null)`;
        } else {
            sql = `INSERT INTO employees (firstName, lastName, roleId, managerId)
                    VALUES ('${responses.firstName}', '${responses.lastName}', '${responses.roleId}', '${responses.manager}')`;
        }
        db.query(sql, (err, rows) => {
            if(err) {
                return err;
            }
            console.log(`${responses.firstName} ${responses.lastName} added to Employees`);
            init();
        });
    });
};

const updateRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'empId',
            message: "Enter the employee's ID who's role is to be updated:"
        },
        {
            type: 'input',
            name: 'newRole',
            message: "Enter the ID of the employee's new role:"
        }
    ]).then((responses) => {
        const sql = `UPDATE employees 
                    SET roleId = '${responses.newRole}'
                    WHERE id = '${responses.empId}'`;
        db.query(sql, (err, rows) => {
            if(err) {
                return err;
            }
            console.log("This employee's role has been updated.");
            init();
        });
    });
};

const updateMgr = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'empId',
            message: "Enter the employee's ID who's manager is to be updated:"
        },
        {
            type: 'input',
            name: 'newMgr',
            message: "Enter the ID of the employee's new manager:"
        }
    ]).then((responses) => {
        let sql = '';
        if(responses.newMgr === 'null') {
            sql = `UPDATE employees
                    SET managerId = null
                    WHERE id = '${responses.empId}'`;
        } else {
            sql = `UPDATE employees 
                    SET managerId = '${responses.newMgr}'
                    WHERE id = '${responses.empId}'`;
                }
        db.query(sql, (err, rows) => {
            if(err) {
                return err;
            }
            console.log("This employee's manager has been updated.");
            init();
        });
    });
};

db.connect((err) => {
    if(err) throw err;
    console.log('Connected to the database.');
    init();
});