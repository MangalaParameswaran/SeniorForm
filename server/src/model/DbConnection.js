import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://mangala214128pa:maggi12@cluster0.u3upwel.mongodb.net/seniorForm"
  )
  .then(() => console.log(`MongoDB is Connected`.bgRed))
  .catch((err) => console.log(err));

export default mongoose;
