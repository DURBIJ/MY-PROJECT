var express = require('express');
const app = express();
var router = express.Router();

const College = require('../models/college');

//to fetch the list of colleges
//http://localhost:3000/api/colleges
router.get('/',function(req, res){
    College.find({},function(err,college){
        res.json(college);
    });
});


router.post('/',function(req, res){
    var college_name = req.body.name;
    const college= new College({
        name : college_name
    });
    college.save().then(function(){
        res.json(college);
    });
});
module.exports = router;


