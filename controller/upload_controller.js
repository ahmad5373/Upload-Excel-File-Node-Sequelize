const upload = require("../model/upload");
const readXlsxFile = require("read-excel-file/node");

exports.excelfileupload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }
    let path =
      __basedir + "/resources/statics/assets/uploads/" + req.file.filename;
    readXlsxFile(path).then((rows) => {
      // skip header
      rows.shift();
      const tutorials = [];
      rows.forEach((row) => {
        const tutorial = {
          id: row[0],
          title: row[1],
          description: row[2],
          published: row[3],
        };
        tutorials.push(tutorial);
      });
      upload.bulkCreate(tutorials)
        .then(() => {
          return res.status(200).send({
            message: "Upload  file successfully: " + req.file.originalname,
          });
        })
        .catch((error) => {
          return res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

exports.getexcelfile = async (req, res) => {
  try {
    const excelfile = await upload.findAll({});
    res.status(200).send({ message: "Excelfile", Excelfile: excelfile });
  } catch (error) {
    console.log("Error ", error);
    return res.status(402).send({
      message: "Could not get excel file",
      Error: error,
    });
  }
};
