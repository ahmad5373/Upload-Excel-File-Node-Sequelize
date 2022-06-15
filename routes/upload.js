const express = require("express");
const router = express.Router();
const excelController = require("../controller/upload_controller");
const upload = require("../middlewere/upload_excel_file");

let routes = (app) => {
  router.post( "/Upload",upload.single("file"), excelController.excelfileupload);
  router.get("/getexcelfile", excelController.getexcelfile);
  app.use("/excelfile", router);
};
module.exports = routes;
