import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    password: String,
    email: String,
    userName: String,
    coverImage: String,
    profileImage: String,
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;