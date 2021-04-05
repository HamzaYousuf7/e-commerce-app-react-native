
--- LOGIN procedure
DROP PROCEDURE IF EXISTS  customer_login;

DELIMITER $$
CREATE PROCEDURE customer_login
(
	email VARCHAR(255),
    password VARCHAR(255)
)
BEGIN
	SELECT *
		FROM customer c
        WHERE c.email LIKE email AND c.password  LIKE password;
END $$
DELIMITER ;

-- example call CALL customer_login('hamza@gmail.com','1234567');