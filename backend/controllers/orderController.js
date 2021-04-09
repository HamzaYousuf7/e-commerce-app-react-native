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
    console.log('result ==>', result);
    if (result.affectedRows == 1) {
      // now inserting the product item
      console.log(
        '[DEBUG] what id we get ====>',
        orderItems[0].productID,
        orderItems[0].quantity,
      );
      
      const query2 = `CALL insert_order_items('${orderItems[0].productID}',${orderItems[0].quantity})`;
      DBPool.query(query2, (error, result) => {
        // if any error occur
        if (error) {
          console.log('[SQL ERROR] ====>', error.sqlMessage);
          return res.status(500).json({
            message: 'Something went wrong, try again ',
            isOrderPlaced: false,
          });
        }

        console.log('result =====> final', result);
      });
    } else {
      return res.status(500).json({
        message: 'Something went wrong, try again ',
        isOrderPlaced: false,
      });
    }
  });
};
