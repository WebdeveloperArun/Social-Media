import User from "../../models/user.model.js";

const unfollowUserController = async (req, res) => {
 try {
  const { id } = req.params;
  const { userId } = req.body;

  if (userId === id) {
   return res.status(400).json({ message: "You can't unfollow yourself" });
  }

  const user = await User.findById(id);
  const follower = await User.findById(userId);

  if (!user) {
   return res.status(400).json({ message: "User not found" });
  }

  if (!user.followers.includes(userId)) {
   return res
    .status(400)
    .json({ message: "You are already unfollowing this user" });
  }

  user.followers = user.followers.filter((follower) => follower !== userId);

  follower.followings = follower.followings.filter(
   (following) => following !== id
  );

  await user.save();
  await follower.save();
  
  const userResponse = user.toObject();
  delete userResponse.password;

  const followerResponse = follower.toObject();
  delete followerResponse.password;

  res
   .status(200)
   .json({ followingUser: userResponse, followerUser: followerResponse });
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

export default unfollowUserController;
