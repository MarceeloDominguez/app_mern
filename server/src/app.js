import express from "express";
import fileUpload from "express-fileupload";
import router from "./routes/posts.routes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

//routes
app.use(router);

export default app;
