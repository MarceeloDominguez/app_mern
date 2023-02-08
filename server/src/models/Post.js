import mongoose from "mongoose";

const postScheme = new mongoose.Schema({
  image: {
    url: String,
    public_id: String,
  },
});

export default mongoose.model("Post", postScheme);
