CREATE DATABASE taco_db;
USE taco_db;

CREATE TABLE tacos
(
	id int NOT NULL AUTO_INCREMENT,
	taco_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);