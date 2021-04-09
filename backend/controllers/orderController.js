// local imp

const DBPool = require('../DB/DBPool');

exports.addOrder = async (req, res, next) => {
  // extracting data from body
  const {customerID, orderItems} = req.body;

  const query1 = `CALL insert_order('${customerID}')`;
  DBPool.query(query1, async (error, result) => {
    // if any error occur
    if (error) {
      console.log('[SQL ERROR] ====>', error.sqlMessage);
      return res.status(500).json({
        message: 'Something went wrong, try again ',
        isOrderPlaced: false,
      });
    }

    // checking if the order get insert or not
    // console.log(
    //   '[DEBUG] ==>',
    //   `order id ==> ${result[0][0].orderID} product id ==> ${orderItems[0].productID} quantity ==>${orderItems[0].quantity}`,
    // );

    // for loop so we can itrate over the item
    for (let item of orderItems) {
      const query2 = `CALL insert_order_items( '${result[0][0].orderID}','${item.productID}',${item.quantity})`;
      DBPool.query(query2, async (error, result) => {
        // if any error occur
        if (error) {
          console.log('[SQL ERROR] ====>', error.sqlMessage);
          return res.status(500).json({
            message: 'Something went wrong, try again ',
            isOrderPlaced: false,
          });
        }
      });
    }

    res.status(201).json({
      message: 'Order placed successfully',
      isOrderPlaced: true,
    });
  });
};

exports.getCustomerOrders = async (req, res, next) => {
  // extracting data from body
  const {customerID} = req.body;
  const query = `CALL get_customer_orders('${customerID}')`;

  DBPool.query(query, async (error, result) => {
    // if any error occur
    if (error) {
      console.log('[SQL ERROR] ====>', error.sqlMessage);
      return res.status(500).json({
        message: 'Something went wrong, try again ',
        orders: [],
      });
    }

    // console.log('===>', result);
    res.status(500).json({
      message: 'Successfully fetch all the orders',
      orders: result[0],
    });
  });
};

exports.getOrderItems = (req, res, next) => {
  // extracting data from body
  const {orderID} = req.body;

  // query
  const query = `CALL get_order_items('${orderID}')`;
  DBPool.query(query, (error, result) => {
    // if any error occur
    if (error) {
      console.log('[SQL ERROR] ====>', error.sqlMessage);
      return res.status(500).json({
        message: 'Something went wrong, try again ',
        order: null,
      });
    }

    // console.log('[DEBUG]====>', result[0][0] == null ? 'yes' : 'no');
    res.status(200).json({
      message: 'Successfully fetch  the order items ',
      order: result[0] == null ? null : result[0],
    });
  });
};
