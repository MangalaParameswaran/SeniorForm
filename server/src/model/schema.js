import mongoose from "mongoose";

const datas = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
  { versionkey: false }
);

const Formschema = mongoose.model("seniorForm", datas);

export default Formschema;
