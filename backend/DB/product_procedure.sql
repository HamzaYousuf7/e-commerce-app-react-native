
-- SELECT THE DB
USE e_commerce_app;

-- get all product
DROP PROCEDURE IF EXISTS get_all_products;

-- get all products procedure
DELIMITER $$
CREATE PROCEDURE get_all_products()
BEGIN
	SELECT *
		FROM product;
END $$
DELIMITER ;


-- example call CALL get_all_products();