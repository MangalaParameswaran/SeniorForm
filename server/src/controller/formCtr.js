import Formschema from "../model/schema.js";

const openPage = (req, res) => {
  try {
    res.send(`
        <h1>Welcome to server side Application</h1>
        `);
  } catch (error) {
    console.log(`${error}`);
  }
};


const getData =async (req, res) => {
    try {
      let data=await Formschema.find({})
      res.status(200).send({
        success:true,
        message:"Fetched users Data successfully",
        data
          })
    } catch (error) {
      console.log(`${error}`);
      res.status(500).send({
        success:false,
        message:"Failed to Fetched users Data",
        
          })
    }
  };

const addForm = async (req, res) => {
  try {
    // let test=req.body
    // console.log("test", test);
    let find = await Formschema.findOne({email:req.body.email})
    // console.log(find);
    if(find){
      res.status(200).send({
        success:false,
        message:`User with ${req.body.email} already exist`
    })
    }
    let data= await Formschema.create(req.body)
        res.status(201).send({
            success:true,
            message:"User Data added succesfully",
            data
        })
  } catch (error) {
    console.log(`${error}`);
    res.status(500).send({
        success:false,
        message:`${error}`,
        error:`${error}`
    })
  }
};

export default {
  openPage,
  addForm,
  getData
};
