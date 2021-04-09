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
    console.log(
      '[DEBUG] ==>',
      `order id ==> ${result[0][0].orderID} product id ==> ${orderItems[0].productID} quantity ==>${orderItems[0].quantity}`,
    );

    const query2 = `CALL insert_order_items( '${result[0][0].orderID}','${orderItems[0].productID}',${orderItems[0].quantity})`;
    DBPool.query(query2, (error, result) => {
      // if any error occur
      if (error) {
        console.log('[SQL ERROR] ====>', error.sqlMessage);
        return res.status(500).json({
          message: 'Something went wrong, try again ',
          isOrderPlaced: false,
        });
      }

      // checking if affectedRows == 1 sucessfull response
      if (result.affectedRows == 1) {
        return res.status(201).json({
          message: 'Order placed successfully',
          isOrderPlaced: true,
        });
      } else {
        return res.status(500).json({
          message: 'Something went wrong, try again ',
          isOrderPlaced: false,
        });
      }
    });
  });
};
