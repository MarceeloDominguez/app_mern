import { deleteImage, uploadImage } from "../claudinary/claudinary.js";
import Post from "../models/Post.js";
import fs from "fs-extra";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    let image;

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      image = { url: result.secure_url, public_id: result.public_id };

      //elimina img de ./upload
      await fs.remove(req.files.image.tempFilePath);
    }

    const newPost = new Post({ image });

    await newPost.save();

    return res.json(newPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postRemoved = await Post.findByIdAndDelete(req.params.id);
    if (!postRemoved) return res.sendStatus(404);

    if (postRemoved.image.public_id) {
      await deleteImage(postRemoved.image.public_id);
    }

    //elimina img de ./upload
    if (req.files?.image) {
      await fs.remove(req.files.image.tempFilePath);
    }

    return res.sendStatus(202);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
