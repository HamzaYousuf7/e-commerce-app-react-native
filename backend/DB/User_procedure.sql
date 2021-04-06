
-- SELECT THE DB FIRST;
USE e_commerce_app;

-- LOGIN procedure
DROP PROCEDURE IF EXISTS  customer_login;

DELIMITER $$
CREATE PROCEDURE customer_login
(
	email VARCHAR(255)
)
BEGIN
	SELECT *
		FROM customer c
        WHERE c.email LIKE email;
END $$
DELIMITER ;

-- example call  CALL customer_login('hamza@gmail.com'); 



-- Register User Procedure
DROP PROCEDURE IF EXISTS register_customer;

DELIMITER $$
CREATE PROCEDURE register_customer
(
	userName VARCHAR(45),
    email VARCHAR(255),
    password VARCHAR(255),
    profileImgPath VARCHAR(45)
    
)

BEGIN
	INSERT INTO customer (userName, email, password, profileImgPath)
    VALUES (userName,email,password,profileImgPath);
		
END $$

DELIMITER ;


-- exaample  CALL register_customer("taha","taha@gmail.com","123456","asjhdjashjdhjk");