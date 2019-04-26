import { isEmpty } from "validator";

// Validate all routes
export default (req, res, next) => {
  const keys = Object.keys(req.body);
  const errors = {};
  keys.forEach(key => {
    switch (key) {
      case "msg":
      case "type":
      case "sources":
        if (isEmpty(req.body[key])) errors[key] = `${key} cannot be empty`;
        break;
      case "rating":
        if (Number(req.body[key]) < 1 || Number(req.body[key]) > 5) {
          errors.rating = `rating should be between 1 and 5`;
        }
        break;
      default:
        break;
    }
  });
  if (Object.keys(errors).length !== 0) {
    res.status(422).send(errors);
  } else {
    next();
  }
};
