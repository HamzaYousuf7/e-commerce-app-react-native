// local imp
const DBPool = require('../DB/DBPool');
const validationFunc = require('../util/validationFunc');

// login
exports.login = (req, res, next) => {
  const {email, password} = req.body;

  // TODO some validation logic
  // console.log('Email and password ===>', email, password);

  // Calling DB procedure
  const query = `CALL customer_login('${email}','${password}')`;
  DBPool.query(query, (error, result) => {
    // if any error occur
    if (error) {
      console.log('[SQL ERROR] ====>', error.sqlMessage);
      return res.status(500).json({
        message: 'Something went wrong, try again ',
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

exports.register = (req, res, next) => {
  // incoming data
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

  const query = `CALL register_customer('${userName}','${email}','${password}','${profileImgPath}')`;
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
