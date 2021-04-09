-- SELECT DB
USE e_commerce_app;

-- insert order
DROP PROCEDURE IF EXISTS insert_order;

DELIMITER $$
CREATE PROCEDURE insert_order 
(
	customerID INT
)
BEGIN
	INSERT INTO orders(customerID,orderStatus,orderDate)
	VALUES (customerID,1,NOW());
       SELECT last_insert_id() AS orderID;
END $$
DELIMITER ;


-- example call  CALL insert_order(1);

-- insert order item
DROP PROCEDURE IF EXISTS insert_order_items;
DELIMITER $$
CREATE PROCEDURE insert_order_items
(
    orderID INT,
    productID INT,
	quantity INT
)
BEGIN
	INSERT INTO order_items
		VALUES(orderID,productID,quantity);
END $$
DELIMITER ;

-- example call CALL insert_order_items(13,5,2);

-- get customer order
DROP PROCEDURE IF EXISTS get_customer_orders;

DELIMITER $$
CREATE PROCEDURE get_customer_orders
(
	customerID INT
)
BEGIN
	SELECT orderID,customerID,orderStatus,DATE_FORMAT(orderDate,'%M %D, %Y ') AS orderDate
		FROM orders
        WHERE orders.customerID = customerID;
END $$
DELIMITER ;

-- example call  CALL get_customer_orders(3)

-- GET ORDER ITEMS
DROP PROCEDURE IF EXISTS get_order_items;

DELIMITER $$
CREATE PROCEDURE get_order_items 
(
	orderID INT
)
BEGIN
	SELECT productID, name, price, orderID, quantity, DATE_FORMAT(orderDate,'%M %D, %Y %h :%i  %p') AS orderDate
		FROM orders o
        RIGHT JOIN order_items oi
        USING (orderID)
        RIGHT JOIN product
        using (productID)
        WHERE o.orderID = orderID;
        
		
END $$
DELIMITER ;


-- example call  CALL get_order_items(4)