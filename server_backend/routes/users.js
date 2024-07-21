const router = require("express").Router();
const {User, validate} = require("../model/user");
const bcrypt = require("bcrypt");
router.post("/", async (req,res)=>{
  try{
    const {error} = validate(req.body);
    if(error){
      return res.status(400).send(error.details[0].message);
    }

    const user = await User.findOne({email: req.body.email});

    if(user){
      return res.status(400).send({message:"User already existed"});
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassoword = await bcrypt.hash(req.body.password, salt);

    await new User({...req.body, password:hashedPassoword}).save();
    res.status(200).send({message:"User created successfully"});
  }
  catch(error){
    res.status(500).send({message:"Internal server error"});
  }
})


module.exports = router;