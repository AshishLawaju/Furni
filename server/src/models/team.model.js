import { Schema }  from "mongoose";
import mongoose from "mongoose"


const teamSchema = new Schema ({

    profile:{
        type:String
    },
    name:{
        type:String
    },
    designation:{
        type:String
    },
    description:{
        type:String
    },
},{timestamps:true})


const Team = mongoose.model("Team",teamSchema)

export {Team}