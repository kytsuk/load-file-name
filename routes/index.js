var express = require('express');
//require the express router
var router = express.Router();
//require multer for the file uploads
var multer = require('multer');
// set the directory for the uploads to the uploaded to
var DIR = './uploads/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer().single('photo');
var fs=require('fs');
/* GET home page. */

router.get('/', function(req, res, next) {
// render the index page, and pass data to it.
  res.render('index', { title: 'Express' });
});

//our file upload function.
router.post('/', function (req, res, next) {
     var path = '';
     upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }  
       // No error occured.
        path = req.file.originalname;

         // fs.writeFileSync(DIR+req.file.originalname, fs.readFileSync(req.file.buffer));
         fs.writeFile(DIR+req.file.originalname, req.file.buffer, function(err) {
             if(err) {
                 return console.log(err);
             }


         });

         return res.send("Upload Completed for "+path);
  });     
})
module.exports = router;
