const express = require("express");
const {
  Get_All_Products,
  Get_Single_Product,
  Update_Product,
  Delete_Product,
  Add_Product,
} = require("../controllers/controllers");

const router = express.Router();

router.route("/").get(Get_All_Products).post(Add_Product);
router.route("/:id").get(Get_Single_Product).patch(Update_Product).delete(Delete_Product);

module.exports = router;
