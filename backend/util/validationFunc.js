exports.isUserNameValid = (userName) => {
  const pattern = /^[a-zA-Z ]{2,30}$/;
  return pattern.test(userName);
};

exports.isEmailValid = (email) => {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
};

exports.isPasswordValid = (password) => {
  if (password.length >= 6) {
    return true;
  } else {
    return false;
  }
};
