import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";

const registerController = async (req, res) => {
 try {
  if (!req.body.email || !req.body.password || !req.body.username) {
   return res.status(400).json({ message: "Please fill in all fields" });
  }

  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  const user = new User(req.body).select("-password");
  await user.save();

  res.status(201).json(user);
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

export default registerController;
