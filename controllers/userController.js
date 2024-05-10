
const { RequestVO } = require("../vo/requestVo");
const { ResponseVO, PaginationResVO, ErrorVO } = require("../vo/responseVo");


class UserController {
  static async createUser(req, res) {
    const validationError = new ErrorVO(
      400,
      "BAD REQUEST",
      "Missing required fields"
    );

  }

  ///-----------------



}

module.exports = UserController;
