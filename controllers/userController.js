
const { RequestVO } = require("../vo/requestVo");
const { ResponseVO, PaginationResVO, ErrorVO } = require("../vo/responseVo");


class UserController {
  static async createUser(req, res) {
    console.log("manu");
    const validationError = new ErrorVO(
      400,
      "BAD REQUEST",
      "Missing required fields"
    );
    res.status(400).json(validationError);

  }

  ///-----------------



}

module.exports = UserController;
