CREATE DATABASE IF NOT EXISTS  e_commerce_app;

USE e_commerce_app;

-- Customer Table
CREATE TABLE IF NOT EXISTS Customer(
	customerID INT PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR(45) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(45) NOT NULL,
    profileImgPath varchar(45)
    
);

-- Products
CREATE TABLE IF NOT EXISTS Product(
	productID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR (255) NOT NULL,
    price DECIMAL(5,3) NOT NULL,
	img VARCHAR(255) NOT NULL,
    rating DECIMAL(5,3) NOT NULL,
    userRated INT NOT NULL,
    details VARCHAR(255) NOT NULL
    
);

-- Order Status
CREATE TABLE IF NOT EXISTS Order_Status(
	orderStatusID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

-- Order Table 
CREATE TABLE IF NOT EXISTS Orders(
	orderID INT PRIMARY KEY AUTO_INCREMENT,
    customerID INT NOT NULL,
    orderStatus INT NOT NULL,
    orderDate DATETIME NOT NULL,
    FOREIGN KEY fk_order_customer(customerID)
    REFERENCES Customer(customerID)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
     FOREIGN KEY fk_order_status(orderStatus)
    REFERENCES Order_Status(orderStatusID)
    ON UPDATE CASCADE
    ON DELETE CASCADE
    
);

-- Order Item Table
CREATE TABLE IF NOT EXISTS Order_Items(
	orderID INT NOT NULL,
    quantity INT NOT NULL,
    productID INT NOT NULL,
    FOREIGN KEY fk_item_product (productID)
    REFERENCES Product(productID)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    FOREIGN KEY fk_item_order (orderID)
    REFERENCES Orders(orderID)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);




