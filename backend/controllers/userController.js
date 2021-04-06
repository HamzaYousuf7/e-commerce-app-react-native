const bcryptjs = require('bcryptjs');

// local imp
const DBPool = require('../DB/DBPool');
const validationFunc = require('../util/validationFunc');

// login
exports.login = async (req, res, next) => {
  // var
  const {email, password} = req.body;

  // Calling DB procedure
  const query = `CALL customer_login('${email}','${password}')`;
  DBPool.query(query, (error, result) => {
    // if any error occur
    if (error) {
      console.log('[SQL ERROR] ====>', error.sqlMessage);
      return res.status(500).json({
        message: 'Something went wrong, try again ',
        user: null,
      });
    }

    // if email or password is incorrect
    if (result[0].length == 0) {
      return res.status(404).json({
        message: 'Either credential is wrong or user does not exists ',
        user: null,
      });
    }

    //login  successfully
    res.status(200).json({
      message: 'successfully login',
      user: result[0][0],
    });
  });
};

exports.register = async (req, res, next) => {
  
  // incoming data
  let hashPassword;
  const {userName, email, password, profileImgPath} = req.body;

  // validation
  if (
    !validationFunc.isUserNameValid(userName) ||
    !validationFunc.isEmailValid(email) ||
    !validationFunc.isPasswordValid(password)
  ) {
    console.log(
      validationFunc.isUserNameValid(userName),
      validationFunc.isEmailValid(email),
      validationFunc.isPasswordValid(password),
    );
    return res.status(422).json({
      message: 'incorrect fields check your data and try again',
      isUserRegister: false,
    });
  }

  // hasing the password
  try {
    hashPassword = await bcryptjs.hash(password, 10);
  } catch (error) {
    return res.status(500).json({
      message: 'something went wrong, Please try again',
      user: null,
    });
  }

  const query = `CALL register_customer('${userName}','${email}','${hashPassword}','${profileImgPath}')`;
  DBPool.query(query, (error, result) => {
    // if any error occur
    if (error) {
      console.log('[SQL ERROR] ====>', error.sqlMessage);
      return res.status(500).json({
        message: 'Something went wrong, try again ',
        isUserRegister: false,
      });
    }

    // successfully register
    if (result.affectedRows == 1) {
      return res.status(201).json({
        message: 'Register successfully ',
        isUserRegister: true,
      });
    }
  });
};
