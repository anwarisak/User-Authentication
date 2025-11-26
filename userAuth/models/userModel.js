import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "username is required"],
    },

    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "email address is required"],
    },

    password: {
      type: String,

      required: [true, "password is required"],
    },
  },

  {
    timestamps: true,
  }
);

// hashing password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//compare password
userSchema.methods.comparePassword =  function (givenpassword) {
  return  bcrypt.compare(givenpassword, this.password)
}

const User = mongoose.model("User", userSchema);
export default User;



