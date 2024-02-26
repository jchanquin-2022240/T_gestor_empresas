import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: [true, "The name is required"],
    },
    mail: {
        type: String,
        requrired: [true, "The email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "The password is required"]
    },
    estado: {
        type: Boolean,
        default: true
    }
});

export default mongoose.model('Admin', AdminSchema);