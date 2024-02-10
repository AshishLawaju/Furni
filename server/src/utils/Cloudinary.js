import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: "dpyzzh7ju",
  api_key: "266845455228135",
  api_secret: "Z3psegZy6zeaRImw4urCeOZwzfQ",
});

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      console.log("there in no file path in cloudnary");
      return null;
    }

    let response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saaveed temp file as the upload operation got fialed
    console.log("reached to catch in cloudnary");
    return null;
  }
};
