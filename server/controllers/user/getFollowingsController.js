import User from "../../models/user.model.js";

const getFollowingsController = async (req, res) => {
 try {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
   return res.status(400).json({ message: "User not found" });
  }
  const followings = await User.find({ _id: { $in: user.followings } }).select(
   "-password"
  );

  res.status(200).json(followings);
  
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

export default getFollowingsController;