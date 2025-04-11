import User from '../../models/user.model.js';
import Post from '../../models/post.model.js';


const getFriendPostsController = async (req, res) => {
    try {
        
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        
        const friendPosts = await Post.find({ userId: { $in: user.followings } }).sort({ createdAt: -1 });

        res.status(200).json(friendPosts);

    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

export default getFriendPostsController;