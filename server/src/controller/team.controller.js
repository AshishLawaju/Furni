import { Team } from "../models/team.model.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";

const addTeam = async (req, res, next) => {
  try {
    const { name, designation, description } = req.body;
    const imageLocalPath = req.file.path;
    // console.log(imageLocalPath);
    let imageUpload = await uploadOnCloudinary(imageLocalPath);
    const photo = imageUpload.url;
    // console.log(photo);
    const newMember = await Team.create({
      profile: photo,
      name,
      designation,
      description,
    });

    if (!newMember) {
      return res.status(400).json("no new member");
    }else{

        res.status(200).json("new member found");
    }
  } catch (error) {
    next(error);
  }
};

export { addTeam };
