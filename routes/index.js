var express = require('express');
var router = express.Router();
const Payment =require('./users')

router.get('/', function(req, res, next) {
  res.render('Form');
});

//Save the data in database
router.post('/', async(req,res)=>{
  const FormData= new Payment(req.body)
  await FormData.save();
  res.redirect('/Gallery')

})


/* GET home page. */
//Fetching All Users From Database
router.get('/Gallery', async function(req,res){
  const AllName=  await Payment.find();
  res.render('Gallery',{AllName});

})


module.exports = router;
