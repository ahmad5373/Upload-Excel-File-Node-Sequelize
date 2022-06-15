const multer = require("multer");

// Use Excelfilter for only excel file
const excelFilter = (req , file , cb)=>{
    if(
        file.mimetype.includes("excel")||
        file.mimetype.includes("spreadsheetml")
    ){
        cb(null , true);
    } else{
        cb("please upload only excel file" , false);
    }
};
const storage = multer.diskStorage({
    destination:( req , file , cb)=>{
        cb(null, __basedir + "/resources/statics/assets/uploads/");
    },

    filename:(req, file , cb)=>{
        cb(null , file.fieldname + '-' + Date.now() + '-' + file.originalname)
    },
    
});
var uploadFile = multer({storage: storage , fileFilter:excelFilter });

module.exports = uploadFile;