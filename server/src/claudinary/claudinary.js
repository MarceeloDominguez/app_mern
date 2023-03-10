import { v2 as cloudinary } from "cloudinary";
import { API_KEY, API_SECRET, CLOUD_NAME } from "../config.js";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

//funcion para recibir y subir imagenes a claudinary
export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "poststest",
  });
};

//funcion para eliminar de claudinary
export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
