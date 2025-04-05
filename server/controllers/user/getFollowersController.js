import User from "../../models/user.model.js";

const getFollowersController = async (req, res) => {
 try {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
   return res.status(400).json({ message: "User not found" });
  }
  const followers = await User.find({ _id: { $in: user.followers } }).select(
   "-password"
  );

  res.status(200).json(followers);
  
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

export default getFollowersController;
