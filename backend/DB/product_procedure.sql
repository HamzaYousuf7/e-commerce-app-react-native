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

-- GET SINGLE PRODUCT BY ID
DROP PROCEDURE IF EXISTS get_single_product;
-- CODE
DELIMITER $$
CREATE PROCEDURE get_single_product 
(
	productID INT
)
BEGIN
	SELECT * 
		FROM product p 
        WHERE  p.productID = productID;
END $$
DELIMITER ;

-- example call  CALL get_single_product(21);

-- insertProduct start	
DROP PROCEDURE IF EXISTS insertProduct;

-- insert procedure
DELIMITER $$
CREATE PROCEDURE insertProduct 
(
	name VARCHAR (255),
    price DECIMAL(5,3),
    img VARCHAR(255),
    rating DECIMAL(5,3),
    userRated INT,
    details VARCHAR(255)
)
BEGIN
	INSERT INTO product(name,price,img,rating,userRated,details)
		VALUES (name,price,img,rating,userRated,details);
END $$
DELIMITER ;

-- EXAMPLE CALL CALL insertProduct("bike",25.5,"some tring",4.5,50,"some more details");
