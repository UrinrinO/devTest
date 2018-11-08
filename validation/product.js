const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProductInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  // data.category = !isEmpty(data.category) ? data.category : "";

  if (!Validator.isLength(data.name, { min: 10, max: 300 })) {
    errors.name = "Product name must be between 10 and 300 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Product Field is required";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "Product price is required";
  }

  // if (!Validator.isEmpty(data.price)) {
  //   errors.price = "Product price is required";
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
