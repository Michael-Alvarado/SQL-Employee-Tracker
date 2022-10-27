DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    deptName VARCHAR(30) NOT NULL,
);

CREATE TABLE roles (
    id INT NOT AUTO_INCREMENT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    departmentId INT NOT NULL,
    FOREIGN KEY (departmentId)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    roleId INT NOT NULL,
    managerId INT,
    FOREIGN KEY (roleId)
    REFERENCES emp_role(id)
    ON DELETE SET NULL,
    FOREIGN KEY (managerId)
    REFERENCES employee(id)
    ON DELETE SET NULL
);