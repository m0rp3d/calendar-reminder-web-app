/* setup for schema named "login-reminder"*/
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';

GRANT ALL PRIVILEGES ON * . * TO 'admin'@'localhost';

ALTER USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';

DROP SCHEMA IF EXISTS `login-reminder`;

CREATE SCHEMA `login-reminder`;

/* create table named "user"*/
USE `login-reminder`;

CREATE TABLE `user` (
`email_id` varchar(30) DEFAULT NULL,
`password` varchar(30) DEFAULT NULL,
`username` varchar(30) NOT NULL,
PRIMARY KEY(`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*create table named "reminder"*/
USE `login-reminder`;

CREATE TABLE `reminder` (
`rem_num` int(12) NOT NULL AUTO_INCREMENT,
`rem_month` int(2) DEFAULT NULL,
`rem_day` int(2) DEFAULT NULL,
`description` varchar(255) DEFAULT NULL,
`rem_user` varchar(30) DEFAULT NULL,
PRIMARY KEY(`rem_num`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

/* insert the following users into the user table*/
USE `login-reminder` ;

INSERT INTO user VALUES 
('mortykrox@yahoo.com', 'morty234', 'mortykrox93'),
('joey23@gmail.com', 'password123', 'joey4prez')

/* insert the following reminders into the reminder table*/
USE `login-reminder` ;

INSERT INTO reminder VALUES 
(1, 3, 23, 'Happy birthday!', 'mortykrox93')
