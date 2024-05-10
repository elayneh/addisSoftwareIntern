import { body, param, query } from "express-validator";

export const createAccountValidator = () => [
  body("firstName").isString().withMessage("A valid first name is required"),
  body("lastName").isString().withMessage("A valid last name is required"),
  body("email").isEmail().withMessage("A Valid Email is required."),
  body("phoneNumber")
    .isString()
    .custom((phone) => {
      const regex = /((^(2517|2519|07|09)\d{3})-?\d{5})/;
      return regex.test(phone);
    })
    .isLength({ min: 10, max: 12 })
    .withMessage(
      "Phone number is required and must be valid. valid codes are 2517/07 or 2519/09"
    ),
  body("gender")
    .isString()
    .custom((val) => ["male", "female"].includes(val.toLowerCase())),
  body("password")
    .isString()
    .custom((password) => {
      const regex = /((^))/;
      return regex.test(password);
    })
    .isLength({ min: 8, max: 32 })
    .withMessage("Password should be strong"),
  body("confirmPassword").isString().withMessage("Confirm password required."),
  body("role")
    .isString()
    .custom((val) =>
      ["steward", "admin", "chef", "customer"].includes(val.toLowerCase())
    )
    .withMessage("A valid role is required"),
  body("experience").isString().withMessage("Experience is required"),
];

export const loginAccountValidator = () => [
  body("email").isEmail().withMessage("Incorrect email or password"),
  body("password").isString().withMessage("Incorrect email or password"),
];

export const getAllUsersValidator = () => [];
export const getUserByIDValidator = () => [];
export const forgotUserPasswordValidator = () => [
  body("email")
    .isString()
    .withMessage(
      "Could you please provide the email associated with your account for resetting the password?"
    ),
];
export const resetPasswordValidator = () => [
  body("password").isString().withMessage("Please provide new password"),
  body("confirmPassword").isString().withMessage("Confirm password required"),
];
export const updateUserPasswordValidator = () => [
  body("currentPassword")
    .isString()
    .withMessage("Current password is required"),
  body("newPassword").isString().withMessage("New password is required"),
  body("confirmPassword").isString().withMessage("Confirm password required"),
];
