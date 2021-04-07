// local imp
const DBPool = require('../DB/DBPool');

exports.getAllProducts = async (req, res, next) => {
  const query = `CALL get_all_products()`;
  DBPool.query(query, (error, result) => {
    // if any error occur
    if (error) {
      console.log('[SQL ERROR] ====>', error.sqlMessage);
      return res.status(500).json({
        message: 'Something went wrong, try again ',
        products: [],
      });
    }

    console.log('====>', result[0]);
    res.status(200).json({
      message: 'succesfully fetch all the products',
      products: result[0],
    });
  });
};

exports.getSingleProduct = async (req, res, next) => {
  // extracting the ID
  const {productID} = req.params;

  // QUERY
  const query = `CALL get_single_product('${productID}')`;
  DBPool.query(query, (error, result) => {
    // if any error occur
    if (error) {
      console.log('[SQL ERROR] ====>', error.sqlMessage);
      return res.status(500).json({
        message: 'Something went wrong, try again ',
        product: null,
      });
    }
    console.log('result ====>', result[0]);

    // sending back the res
    res.status(200).json({
      message: 'Successfully fetch single product',
      product: result[0],
    });
  });
};
