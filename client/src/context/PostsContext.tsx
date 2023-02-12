import React, { createContext, useState, useContext, useEffect } from "react";
import postApi from "../api/api";

interface Post {
  _id: string;
  image: { public_id: string; url: string };
}

type PostsContextProps = {
  images: Post[];
  uploadImage: (uri: string, fileName: string, fileType: string) => void;
  getPosts: () => Promise<Post[]>;
  setImages: React.Dispatch<React.SetStateAction<Post[]>>;
};

export const PostsContext = createContext({} as PostsContextProps);

export const PostsProvider = ({ children }: any) => {
  const [images, setImages] = useState<Post[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const resp = await postApi.get("/posts");
    return resp.data;
  };

  const uploadImage = async (
    uri: string,
    fileName: string,
    fileType: string
  ) => {
    const params = {
      uri,
      name: fileName,
      type: `image/${fileType}`,
    };

    const fileToUpload = JSON.parse(JSON.stringify(params));

    const formData = new FormData();

    formData.append("image", fileToUpload);

    try {
      const resp = await postApi.post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostsContext.Provider value={{ uploadImage, getPosts, images, setImages }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostsContext);

  return context;
};
