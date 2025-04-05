import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";

const loginController = async (req, res) => {
 try {
  const { email, password } = req.body;

  if (!req.body.email || !req.body.password) {
   return res.status(400).json({ message: "Please fill in all fields" });
  }

  const user = await User.findOne({ email });
  if (!user) {
   return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
   return res.status(400).json({ message: "Invalid credentials" });
  }
  const userResponse = user.toObject();
  delete userResponse.password;

  res.status(201).json(userResponse);
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

export default loginController;
